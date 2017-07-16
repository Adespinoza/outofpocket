import csv


data = open("problematic_text.csv", "r")

output = open("yikes.csv", "w")
reader = csv.DictReader(data, fieldnames=["theme", "text"])

# TODO: create 80-20 train/test split

for row in reader:
  output.write("__label__{} {}\n".format(row["theme"].replace(' | ', '_'), row["text"].lower().strip("(@[A-Za-z0-9]+)|([^0-9A-Za-z])|(\w+:\/\/\S+)")))

