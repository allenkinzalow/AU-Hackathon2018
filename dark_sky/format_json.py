import json
import os

j = json.load(open('test_data.json'))

with open('fixed_json.json', 'w') as f:
    f.write(json.dumps(j, indent=2))
    f.close()
