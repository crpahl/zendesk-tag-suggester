import sys
import json
import sys

def main():
	communications = sys.argv[0]

	loaded_model = pickle.load(open("model.p", 'rb'))

	x = ['I', "like", "technology"]

	cv = CountVectorizer
	mult_nb = Pipeline([("count_vectorizer", CountVectorizer(analyzer=lambda x: x)), ("multinomial nb", loaded_model)])

	tags = mult_nb.predict(x)

	json_string = json.dumps(tags)
	print json_string

if __name__ == '__main__':
	main()
