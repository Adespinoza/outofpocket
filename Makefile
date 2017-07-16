#
# This Makefile 
#
all:
	python preprocess.py
	./fasttext supervised -input yikes.train -output out_of_pocket


play:
	./fasttext predict out_of_pocket.bin -