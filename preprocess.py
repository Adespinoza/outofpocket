import csv

data = open("problematic_phrases.csv", "r")
output = open("yikes.train", "w")
reader = csv.DictReader(data, fieldnames=["theme", "text"])

for row in reader:
  output.write("__label__{} {}\n".format(row["theme"].replace(' ', '_'), row["text"].lower().strip(",.?")))
