import sys
import json

def main():
    tags = ['dummy_tag1', 'dummy_tag2']
    json_string = json.dumps(tags)
    print json_string

if __name__ == '__main__':
   main()