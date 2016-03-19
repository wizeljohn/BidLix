  $(document).ready(function(){
    $('#divCategory').hide();

    var user = localStorage.getItem('localUser');
    var pass = localStorage.getItem('localPass');
    var bas = localStorage.getItem('bas_user');

    localStorage.setItem('localUser',user);
    localStorage.setItem('localPass',pass);


    if((localStorage.getItem('localUser') == 'null') || (localStorage.getItem('localPass') == 'null')){
      localStorage.setItem('localUser', '');
      localStorage.setItem('localPass','');
    }

    $("#btnSellItem").hide();
    if(bas == user){
      $("#btnSellItem").show();
    }

    $('#pgBrowseItem').click(function(){
      $("#pgBrosweItem").show();
      $('#divCategory').hide();
    });

    $('#btnMobile').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-mobile fa-pull-center fa-2x' id='cssMobile'></span> Mobile and Tablets");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Mobile Phone & Tablets'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnComLap').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-laptop fa-pull-center fa-2x' id='cssMobile'></span> Computers and Laptops");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Computers & Laptops'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnShoes').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-suitcase fa-pull-center fa-2x' id='cssMobile'></span> Shoes and Bags");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Shoes & Bags'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });


    });

    $('#btnAppliance').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-television fa-pull-center fa-2x' id='cssMobile'></span> Appliances");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Appliances'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnWatches').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-diamond fa-pull-center fa-2x' id='cssMobile'></span> Watches and Jewerly");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Watches & Jewerly'  },
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });


    });

    $('#btnCamera').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-camera fa-pull-center fa-2x' id='cssMobile'></span> Cameras");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Cameras'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnCloths').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-female fa-pull-center fa-2x' id='cssMobile'></span> Clothing");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Clothing'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }

    });

    });

    $('#btnBooks').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-book fa-pull-center fa-2x' id='cssMobile'></span> Books");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Books'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnFoods').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-coffee fa-pull-center fa-2x' id='cssMobile'></span> Foods");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Foods'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });

    });

    $('#btnOthers').click(function(){
      $("#pgBrosweItem").hide();
      $('#divCategory').show();
      $('#txtTitle').html("<span class='fa fa-file-text fa-pull-center fa-2x' id='cssMobile'></span> Others");

      $.ajax({
      type: 'POST',
      url:'http://gcccs.org/largo/best/category.php',
      dataType:'html',
      data: {sql:'Others'},
      success: function(data){
        if(data){
          $('#Category').html(data);    
        }
      }
    });
    });


    //=========== START VIEW PRICE FUNCTION ============
    $("#PriceView").click(function(){
      var SuggetItem = localStorage.getItem('post_id');  
      var user = localStorage.getItem('localUser');
      var bas = localStorage.getItem('bas_user');

      if(bas == user){
        $.ajax({
        type : 'POST',
        url:'http://gcccs.org/largo/best/OwnerSuggest.php',
        dataType: 'html',
        data:{
          sql : SuggetItem
          },
        success:function(bidlix){
          if(bidlix){
             $('#divView').html(bidlix);
          }
        }
      });  

      // ============ to notify 3 bidders

      $.ajax({
          type : "POST",
          url : 'http://gcccs.org/largo/best/getHighestBidders.php',
          data : {
              sql : SuggetItem
          },
          success : function(data){
            if (data){
              for (i=0;i<data.length;i++){
                highest_bidders.push(data[i].fld_suggestUser)  
              }
              console.log(highest_bidders)
            }
          }
        }); 
      // ============ to notify 3 bidders
      }

      else{
        $.ajax({
        type : 'POST',
        url:'http://gcccs.org/largo/best/viewSuggest.php',
        dataType: 'html',
        data:{
          sql : SuggetItem
          },
        success:function(bidlix){
          if(bidlix){
             $('#divView').html(bidlix);
          }
        }
      });  
      }

             
    });
    //=========== END VIEW PRICE FUNCTION ============
    
    //=========== START VIEW COMMENT FUNCTION ============
    $("#CommentView").click(function(){
      var com = localStorage.getItem('post_id');
        $.ajax({
        type: 'POST',
        url:'http://gcccs.org/largo/best/comment.php',
        dataType:'html',
        data:{
          sql : com
        },
        success: function(data){
          if(data){
            $('#divComment').html(data);
          }
        }
        });
    });
    //=========== END VIEW COMMENT FUNCTION ============

    //=========== START ADD COMMENT FUNCTION ============
    $('#btnComment').click(function(){
      var name = localStorage.getItem('localUser');
      var post = localStorage.getItem('post_id');
      var comment = document.getElementById('txtComment').value;
      var postUser = localStorage.getItem('bas_user');

      /*======CONDITION FOR CURRENT USER AND POSTED USER=======*/

        if( name != postUser){
          alert("Only the user who posted will be the one who can comment.");
        }

        else{
          $.ajax({
            url: "http://gcccs.org/largo/best/addComment.php",
            type: "POST",
            data:"username="+name+"&usercom="+comment+"&postId="+post,
            success: function(data){
              if(data){
                alert("Successfuly added your comment.");

                /*============================================
                  FUNCTION TO VIEW COMMENT OF CURRENT POST
                =============================================*/
                $.ajax({
                type: 'GET',
                url:'http://gcccs.org/largo/best/largopost.php',
                dataType:'html',
                data:{
                  sql : post
                },
                success: function(data){
                  if(data){
                    $('#divComment').html(data);
                  }
                }
                });
              }
            }
                      
          });
        }      
    });
    //=========== END ADD COMMENT FUNCTION ============
    


      //==========Start function for admin link ===========
      $('#liProfile').click(function(){
        if((localStorage.getItem('localUser') == "BidLix_Admin") && (localStorage.getItem('localPass') == "bidlixAdmin123")){
        $("#divAdmin").show();
      }
      else {
        $("#divAdmin").hide();
      }
      });
      




  });
  
  seconds = "";
  counter = 1000;
  
  function seepost(a){
      $.ajax({
      type : 'POST',
      url : 'http://gcccs.org/largo/best/cmodel.php',
      data : {
          a : a, 
        },
      dataType : 'html',
      success : function(eliza){
        if(eliza){
        $("#divScript").append(eliza);
        console.log(image)
        $("#mdlimage").attr('src',image);
        $("#mdlname").html("Description : " + name);
        $("#mdlcondition").html("Condition : " + condition);
        $("#mdluser").html("Posted By : " + user);
        $("#mdlhour").html("Hours : " + hour);
        $("#mdlmin").html("Mins : " + min);
        localStorage.setItem('bas_user',user);
        localStorage.setItem('post_id',a);
        //code ni largo 
        //var expirationDate = expire;
        var todaysDate = new Date()
        var expireDate = expire;

        if(expireDate == 0){
          document.getElementById('countdown').innerHTML = "Suggestion's Over";
        }
        else{
            var parsedDate = new Date(expireDate);
            var resultDate = parsedDate - todaysDate
            var secondsConverted = Math.abs(Math.round(resultDate/1000))
            var second = secondsConverted;
            console.log("Largo eto ung natitirang milliseconds! : " + second)
            seconds = second
            var countdownTimer = setInterval('timer()', counter);
          }
        }
      }
        
      });
    }

    //==========function for suggest ========
    function suggestuser(){
      $("#txtPostId").hide();
      document.getElementById('suggestUser').value = localStorage.getItem('localUser');
      document.getElementById('txtPostId').value = localStorage.getItem('post_id');
    }

    function timer() {
        var days        = Math.floor(seconds/24/60/60);
        var hoursLeft   = Math.floor((seconds) - (days*86400));
        var hours       = Math.floor(hoursLeft/3600);
        var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
        var minutes     = Math.floor(minutesLeft/60);
        var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds; 
        }
        document.getElementById('countdown').innerHTML = hours + "hours : " + minutes + "mins ";
        if (seconds == 0) {
            clearInterval(countdownTimer);
            document.getElementById('countdown').innerHTML = "Suggestion's Over";
        } else {
            seconds--;
        }
    }

    function savename(mesId){
      var id = mesId;
      $.ajax({
        type : 'POST',
        url: 'http://gcccs.org/largo/best/sender.php',
        data: {
        sql: id
        },
        dataType: 'html',
        success : function(data){
          if(data){
            $("#divSender").append(data);
            var reciever = $('#txtReciever').val(nameMes);
            localStorage.setItem('Reciever',reciever);
        }
        }
      }); 

    }
     /// ============ function to send message to all bidders  
    var highest_bidders =[];
    function sendAll(){

      $.ajax({
        url : 'http://gcccs.org/largo/best/sendall.php',
        type : 'POST',
        data : {
          highest_bidders : JSON.stringify(highest_bidders)
        },
        success: function (data){
          console.log(data)
          alert("Successfuly notify your bidders.");
          location.reload();
        }

      })
    }
     /// ============ function to send message to all bidders  
    
 



