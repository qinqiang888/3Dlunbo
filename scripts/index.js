window.onload=function(){
	//是基础部分的数据存储  逻辑操作
	//特定用途部分 
	//能表达页面中的任何元素  
	//选取页面中的元素 (所有的页面元素对都定义在window这个对象中)
	//选取页面中的元素 
	// var el=document.getElementById('test');  
    // console.log(el);
    var els=document.getElementsByClassName('lunbo');
    // console.log(els);
    //els是一个类数组;
    // el.style.width=100;s
	//获取元素的信息          
	//对元素进行操作
	// el.style.border='1px solid red';
	var colors=['red','green','blue','#ee3d46','black'];
	var date=[[-500,-400],[-230,-200],[0,0],[230,-200],[500,-400]];
	var index=[1,2,4,2,1];
	var lunbo =function(){
		for(var i=0;i<els.length;i++){
			els[i].style.backgroundColor=colors[i];
			els[i].style.webkitTransform='translate3d('+date[i][0]+'px,0,'+date[i][1]+'px)';
			els[i].style.zIndex=index[i];

		}
		date.unshift(date.pop());
		index.unshift(index.pop());
		// colors.unshift(colors.pop());

	};
	
    setInterval(lunbo,1000);
    // var cc=document.getElementByTagName('img');
    // cc.style.width='400px';
    // cc.style.height='400px';
    // cc[0].innerHTML='aaa';
    // cc[0].onclick=function(){
    // 	alert(this.innerHTML);
    // }

//  el.onclick=function(){console.log(this.innerHTML);};
// 
  	// els.style.border='1px solid red';
	//并不是所有的对象都具有style这个属性
	//和浏览器配合监测用户行为(事件)
// 	var data=[
// 	{translateX:'-500px',translateZ:'-400px'},
// 	{translateX:'-230px',translateZ:'-200px'},
// 	{translateX:'0px',translateZ:'0px'},
// 	{translateX:'230px',translateZ:'-200px'},
// 	{translateX:'500px',translateZ:'-400px'}
// 	];
// 	var draw=function(){
// 	for(var i=0;i<els.length;i++){
// 	els[i].style.webkitTransform='translate3d('+data[i].translateX+',0,'+data[i].translateZ+')';
//  }
//      data.unshift(data.pop());
// };
//  	setInterval(draw,2000);

//程序等于  数据结构+算法
 	//这个函数接受两个参数  ，第一个参数是回调函数，第二个参数是时间s
 	//这个函数的功能是  每隔s就自动帮我们调用一次传入的回调函数

































	//选取元素的api;

	// var m=document.getElementsByClassName('lunbo');
	// var date=[{x:-500,z:-400},{x:-230,z:-200},{x:0,z:0},{x:230,z:-200},{x:-500,z:-400}];



}