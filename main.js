var result = `/*
* HR您好，我是李冬阳
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式*/
*{transition: all 1s;}
html{
    background:rgb(222,222,222);
}
#code{
    border: 1px solid grey;
    padding: 16px;
}
/*下面来做一点代码高亮*/
.token.selector{color:#690;}
.token.punctuation{color:#999;}
.token.property{color:#905;}
.token.function{color:#DD4A68;}
/*加点3D效果*/
#code{
    transform: rotate(360deg);
}
/*我正式来介绍下我自己吧
*我需要一张白纸*/
`

var result2 = `
#code{
    position: fixed;
    left:0;
    width: 50%;
    height: 100%;
    overflow: hidden;

}
 #paper{
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: #ddd;
  }
  #paper > .content{
    background: white;
    width: 100%;height: 100%;
    color:#DD4A68;
  }
  
  `
 var result3 = `
 # 自我介绍
我叫 李冬阳
1996 年 10 月出生
毕业于北京语言大学计算机专业
希望应聘前端开发岗位
# 技能介绍
HTML5 CSS3 原生JS
VUE全家桶
小程序开发
Nodejs&Express



# 联系方式
- 手机 15650785172
- 微信 lidongyang--

 `

writeCSS('',result,()=>{
    createPaper(()=>{
        writeCSS(result,result2,()=>{
            writeMarkdown(result3)
        })
    })
},
)



function writeCSS(prefix,code,fn){
    let domCode = document.querySelector('#code')
    var n =0
    var id= setInterval(()=>{
        n+=1
        domCode.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css,'css')
        styleTag.innerHTML = prefix+code.substring(0,n)
        domCode.scrollTop = domCode.scrollHeight
        if(n>=code.length){
            window.clearInterval(id)
            fn&&fn.call()
        }
    },10)
}
function createPaper(fn){
    var paper=document.createElement('div')
    paper.id='paper'
    var content = document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
function writeMarkdown(markdown){
   let domPaper = document.querySelector('#paper>.content')
   var n =0
   var id= setInterval(()=>{
       n+=1
      domPaper.innerHTML = markdown.substring(0,n)
      
       if(n>=markdown.length){
           window.clearInterval(id)  
       }
   },10)


}







