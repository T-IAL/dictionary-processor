class Dictionary{
  constructor(name){//name是字符串
    this.iafeuqhro1041644oyflhg1dx2h38p1 = name;//为了避免与词条混淆用了一个乱码表示名字，应该不会有人定义这样的词吧……
  };
};
class WordProcessor{
  constructor(dictionary){//dictionary是对象
    this.dictionary_name = dictionary.iafeuqhro1041644oyflhg1dx2h38p1;
    this.content = dictionary;
  }
  get_word(){
    for(let word in this.content){
      this[word] = new Word(word,this.content[word]);
    }
  }
}
class Word{
  constructor(word,definition){
    this[word] = definition;
  }
}
class DictionaryProcessor{
  constructor(ujgfyujhdghfyuyjfdgf){
    this.iurewseryiopitfrgiotfdsvhumtgfdsf = ujgfyujhdghfyuyjfdgf;//因为担心出bug所以就水了一个初始化函数
  }
  add_word(dictionary,word,definition){//word,definition都是字符串,dictionary是对象
    Object.defineProperty(dictionary, word, {
    value : definition,
    writable : true,
    enumerable : true,
    configurable : true
  });
  }
  output(dictionary,word){//word是字符串,dictionary是对象
    document.write(dictionary[word]);
  }
  delete_word(dictionary,word){//word仍然是字符串,dictionary是对象
    delete dictionary[word];
  }
  get_content(dictionary){//,dictionary是对象
    var content = '词典内容<br>';
    for(var w in dictionary){
      if(w!='iafeuqhro1041644oyflhg1dx2h38p1'){
      content = content.concat(w,':',dictionary[w],'<br>');
      }
    }
    return content;
  }
  createAndDownloadFile(dictionary){//,dictionary是对象
    var fileName = dictionary.iafeuqhro1041644oyflhg1dx2h38p1;
    var content = this.get_use(dictionary);
    var aTag = document.createElement('a');
    var blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
  }
  get_show(dictionary){
    var content = this.get_content(dictionary);
    return content;
  }
  get_use(dictionary){
    var use = JSON.stringify(dictionary);
    return use;
  }
}
var tmp1;//数据文件存这里
var input = document.getElementById("data");
var dic;
    //console.log(info);
input.onchange = function(){
  var file = this.files[0];
  if(!!file){
    var reader = new FileReader();
    reader.readAsText(file);//默认为utf-8类型
    reader.onload = function(){
      tmp1 = this.result;
      console.log(this.result);
      console.log(tmp1);//打印检查
    };
  }
};
var dictionary_processor = new DictionaryProcessor('gafqgrewqtgfwqfwresrdthrgtrtge');
var add_word_button = document.getElementById("addwordbutton");
var del_word_button = document.getElementById("delwordbutton");
var download_button = document.getElementById("downloadbutton");
var create_new_dictionary_button = document.getElementById("createnewdictionarybutton");
var show_content_button = document.getElementById("showcontentbutton");
var load_dictionary_button = document.getElementById("loaddictionarybutton");
add_word_button.onclick = function(){dictionary_processor.add_word(dic,document.getElementById('addword').value,document.getElementById('definition').value);};
del_word_button.onclick = function(){dictionary_processor.delete_word(dic,document.getElementById('delword').value);};
download_button.onclick = function(){dictionary_processor.createAndDownloadFile(dic);};
create_new_dictionary_button.onclick = function(){var dic = new Dictionary('dictionary');};
show_content_button.onclick = function(){setInterval(function(){document.getElementById('dictionary').innerHTML=dictionary_processor.get_show(dic)},1000);};
load_dictionary_button.onclick = function(){dic = JSON.parse(tmp1);}
