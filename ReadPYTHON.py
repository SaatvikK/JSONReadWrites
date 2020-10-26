import json

#Opening the .json file.
with open(r"C:\Users\sat.rk\Documents\Desktop\DesktopStuff\Visual Studio Projects\VS Code\ThisWorkspace\NewShitForOtherLangs\JSON\exampleDB.json") as JsonFile:
  Data = json.load(JsonFile)
  print("The full .json file:\n", Data)

  for i in Data:
    print(Data[i]) #"i" is the KEY. Data[i] is the value of key "i"
    