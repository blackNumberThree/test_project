//we get from server and display presentList.json
$.ajax({
    url: 'https://blacknumberthree.github.io/jsonRepository/presentList.json',
    async : true,
    success: function(data){
  	$('.present').append(`(${data.length})`);
  	data.forEach(element => {
        $('.present_people').append(
           `<li class="users__user-item" id=" ${element.historyNumber}" >
                <span class="users__user-number">${ element.historyNumber }</span>
                <span class="users__user-fio">${ element.lastName } ${element.firstName} ${element.patrName}</span>
                <span class="users__user-room">${ element.bedNumber }</span>
            </li>`       
            );
    })
    //  by click we select one person and show him on the left
  	$('.users__user-item').on("click",function(ev){
        //select
		$(".users__user-item").removeClass("checked");
		$(this).addClass("checked")
		let currentObj=data.find( (currenObj)=> {return this.id==currenObj.historyNumber} )
        //show him on the left
		$('.right__fio-value').text(`${currentObj.lastName} ${currentObj.firstName} ${currentObj.patrName}`)
		let age = new Date('2020-03-06') - new Date(`${currentObj.birthDate}`)
		$('.right__age-value').text(Math.floor(age/31540000000))
		$('.right__diagnosis-value').text(`${currentObj.diagnosis}`)
	})
  }
});
//we get from server and display quittingList.json
$.ajax({
    url: 'https://blacknumberthree.github.io/jsonRepository/quittingList.json',
    async : true,
    success: function(data){
 	    $('.quitting').append(`(${data.length})`);
        data.forEach(element => {
            $('.quitting_people').append(
               `<li class="users__user-item" >
                    <span class="users__user-number">${element.historyNumber}</span>
                    <span class="users__user-fio"> ${element.lastName} ${element.firstName} ${element.patrName}</span>
                    <span class="users__user-room">${element.cause}</span>
                </li>`       
            );
       })
  }
});
//this function toggle active state between quitting patients and present
$('.left__header').on("click",function(ev){
    if(!ev.target.classList[2]) 
    	{
    		$(".left__header").removeClass("left__header_active");
    		$(`.${ev.target.classList[1]}`).addClass("left__header_active")
    		$(".users__list").removeClass("list-visible");
    		$(`.${ev.target.classList[1]}_people`).addClass("list-visible")
    	}
    if (ev.target.classList[1]==='present') 
	    { 
            $(".right").css("border","1px solid  #3298CC")
        }
	else{
        $(".right").css("border","none")
        } 
})
