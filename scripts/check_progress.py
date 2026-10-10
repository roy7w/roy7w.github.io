"""Check generated progress data against the actual MkDocs HTML output."""
from pathlib import Path
import json
import re
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[1]
source = (root / 'docs/assets/javascripts/progress-data.js').read_text(encoding='utf-8')
manifest = json.loads(source.split('window.ROADMAP_TASKS = ', 1)[1].rstrip(';\n'))
legacy = json.loads((root / 'scripts/progress-legacy.json').read_text(encoding='utf-8'))

def soup(path):
    return BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')

def hash_text(text):
    value = 2166136261
    # Hash UTF-16 code units like the old browser script.
    encoded = text.encode('utf-16-le')
    for index in range(0, len(encoded), 2):
        unit = encoded[index] + (encoded[index + 1] << 8)
        value = ((value ^ unit) * 16777619) & 0xffffffff
    result = ''
    while value:
        result = '0123456789abcdefghijklmnopqrstuvwxyz'[value % 36] + result
        value //= 36
    return result or '0'

task_ids = []
for page, tasks in manifest.items():
    rendered = soup(root / f'site/ai-agent/{page}/index.html').select('li.task-list-item')
    assert len(rendered) == len(tasks), page
    for item, task in zip(rendered, tasks):
        assert item.select_one('[data-task-id]')['data-task-id'] == task['id']
        assert item.select_one('input').has_attr('checked') == task['default']
        task_ids.append(task['id'])

assert len(task_ids) == len(set(task_ids)), 'duplicate task ID'
assert all(task['optional'] for task in manifest['stage-07'])
assert next(task for task in manifest['stage-08'] if task['id'] == 's08-t013')['optional']
assert all(not task['optional'] for task in manifest['stage-08'] if task['id'] != 's08-t013')

archive_count = 0
for number in range(11):
    page = f'stage-{number:02}'
    rendered = soup(root / f'site/ai-agent/archive/{page}/index.html').select('li.task-list-item')
    for index, item in enumerate(rendered):
        text = re.sub(r'\s+', ' ', item.get_text()).strip()
        assert {'page': page, 'key': hash_text(text + '|' + str(index))} in legacy[text], (page, index)
        archive_count += 1
assert archive_count == sum(len(entries) for entries in legacy.values())
print(f'PASS: {len(task_ids)} current task IDs/defaults agree; {archive_count} legacy identities preserved.')
