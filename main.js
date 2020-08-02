



$(document).ready(function(){
    $(".chat_on").click(function(){
        $(".Layout").toggle();
        $(".chat_on").hide(300);
    });
    
       $(".chat_close_icon").click(function(){
        $(".Layout").toggle();
           $(".chat_on").show(300);
    });
    
});

//on send button
$(document).keydown(function (e) { 
    
    if(e.keyCode===13 && !e.shiftKey){
         
            const userMsg = $(".emoji-wysiwyg-editor.Input_field.parent-has-scroll").text();
            if(userMsg.replace(/\s/g, '').length){
                            console.log(userMsg);
            $(".emoji-wysiwyg-editor.Input_field.parent-has-scroll").html("");

            let Messages_list = `<div class="Messages_list">
            <div class="Message_text_container">
              <img src="./naaniz.png" style="width: 30px;height: 30px;">
              <p>${userMsg}</p>
              <span class="time-right">11:00</span>
            </div>`;
            $(".Messages").append(Messages_list);
            document.querySelector(".Messages").scrollTop = document.querySelector(".Messages").scrollHeight;
            }



    }
    
});



