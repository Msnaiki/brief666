console.log("test jquery");
 
    var reg_name=RegExp("^[a-zA-Z ]{3,20}$");
    var reg_mail =RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
    var reg_cin =RegExp("^[a-zA-Z]{2}[0-9]{6}$");
    var reg_tel = RegExp("^[0][5-6-7][0-9]{8}$");

    $( window ).on( "load", function()  
    {
      var  List_province = [
        {"Id": "Selectionner...", "Name": "Selectionner..."}, 
        {"Id": "Marrakech", "Name": "Marrakech"},
        {"Id": "Safi", "Name": "Safi"}
     
        ];
        for (var i = 0; i < List_province.length; i++) {
          $('#id_prov').append('<option value="' + List_province[i].Id + '">' + List_province[i].Name + '</option>');
    }
    } );
     //Charging up dropdownlist Province :
    
 
    $(document).ready(function() {

      //  form register
        $('#_form').submit(function(e) {
           
          var Nom = $('#Nom').val();
          var Prenom = $('#Prenom').val();
          var qualite = $('#qualite').val();
          var tel =  $('#tel').val();
          var cin = $('#Cin').val();
         

          
      
          $(".error").remove();
      
          if (!reg_name.test(Nom )) {
            e.preventDefault();
            $('#Nom').after('<span class="error">Nom invalide !</span>');
            
          }
          
          
          if (!reg_name.test(Prenom )) {
            e.preventDefault();
            $('#Prenom').after('<span class="error">Prenom invalide !</span>');
            
          }
         
          if (qualite.length < 3) {
            e.preventDefault();
            $('#qualite').after('<span class="error">Qualité Invalide !</span>');
         
          }  
          
          if (!reg_tel.test(tel)) {
            e.preventDefault();
            $('#tel').after('<span class="error">Tel Invalide</span>');
           
          } 
          
          if (!reg_cin.test(cin)) {
            e.preventDefault();
            $('#Cin').after('<span class="error">Cin Invalide</span>');
         
          } 
          
       
       
          
        });

           //Variables 
              

           var select_dep = $('#id_dep');
           var select_province =  $('#id_prov');
           var select_commune = $('#id_commune');
 

          var dep_function = select_dep.change(function(){
            if(select_dep[0].selectedIndex!=0)
            {
             
              $('#err_dep').text("");
            }
          })

            // remplir les champs de dropdown list



       var province_function= select_province.change(function() {
          select_commune.find('option').remove().end();
            
            
            


          if(select_province[0].selectedIndex===1)
          {
            $('#err_province').text("");
            var arrayList = [
              {"Id": "Menara", "Name": "Menara"}, 
              {"Id": "El oudaya", "Name": "El oudaya"},
              {"Id": "Annakhil", "Name": "Annakhil"}, 
              {"Id": "Gueliz", "Name": "Gueliz"}
              ];
               
      
              for (var i = 0; i < arrayList.length; i++) {
                select_commune.append('<option value="' + arrayList[i].Id + '">' + arrayList[i].Name + '</option>');
          }
          }
          else   if(select_province[0].selectedIndex===2)
          {
            $('#err_province').text("");
            var arrayList = [
              {"Id": "Sidi Aissa", "Name": "Sidi Aissa"}, 
              {"Id": "Sidi Etiji", "Name": "Sidi Etiji"},
              {"Id": "Safi", "Name": "Safi"}, 
              {"Id": "Moul Elbergui", "Name": "Moul Elbergui"}
              ];
               
      
              for (var i = 0; i < arrayList.length; i++) {
                select_commune.append('<option value="' + arrayList[i].Id + '">' + arrayList[i].Name + '</option>');
          }

          }
          else return null;


        });
        
             //form Q&A Click 

        $('#btn_qa').click(function(e) {
          var cin = $('#id_cin').val();
          var input_objet = $('#id_objet').val();
          var input_msg = $('#id_msg').val();
          
 
          $(".error").remove();
          
           
          
      
          if (select_dep[0].selectedIndex===0) {
            e.preventDefault();
             
             
            $('#id_dep').after('<span id="err_dep" class="error">Selectionner un département !</span>');
           
           
           
          }
          
          
          if (select_province[0].selectedIndex===0) {
            e.preventDefault();
           
             
            $('#id_prov').after('<span id="err_province" class="error">Selectionner une province !</span>');
           
           
          }

          
          if (!reg_cin.test(cin)) {
            e.preventDefault();
                $('#id_cin').after('<span id="err_cin" class="error">Cin Invalide</span>');
             
              } 

              if (input_objet.length<10) {
                e.preventDefault();
                    $('#id_objet').after('<span id="err_obj" class="error">L objet doit contenir au moins 10 lettres </span>');
                 
                  } 
                  if (input_msg.length<10) {
                    e.preventDefault();
                        $('#id_msg').after('<span id="err_msg" class="error">Le message doit contenir au moins 10 lettres </span>');
                     
                      } 
          
           


          // if (qualite.length < 3) {
          //   $('#qualite').after('<span class="error">Qualité Invalide !</span>');
          //   error_cpt++;
          // }  
          // else
          // {
          //   error_cpt--;
          // }
          // if (!reg_tel.test(tel)) {
          //   $('#tel').after('<span class="error">Tel Invalide</span>');
          //   error_cpt++;
          // } 
          // else
          // {
          //   error_cpt--;
          // }
          // if (!reg_cin.test(cin)) {
          //   $('#Cin').after('<span class="error">Cin Invalide</span>');
          //   error_cpt++;
          // } 
          // else
          // {
          //   error_cpt--;
          // }
          // console.log(error_cpt)
          //   if(error_cpt>0)
          // {
          //     //  e.preventDefault();
             
          //   // $('#_form').attr('action', '*');
          // }
          // else
          // {
          //   $(".error").remove();
          //   $('#_form').attr('action', '/submit');
          // }
       
          
        });
     
      
      });