import sys
import json
import sys

def main():
	communications = sys.argv[0]

	tags = ['QuickBooks', 'Xero']
	json_string = json.dumps(tags)
	print json_string

if __name__ == '__main__':
	main()