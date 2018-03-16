	var Arr=[0,0,2,9,8,0,5,0,0,
			 4,0,0,0,7,0,0,1,3,
			 0,3,9,6,0,4,0,7,0,
			 2,0,0,0,5,6,4,0,0,
			 8,4,0,3,0,0,2,0,1,
			 9,0,7,0,0,1,0,8,6,
			 6,0,0,7,0,5,1,3,0,
			 0,9,1,4,0,0,0,0,5,
			 0,2,0,0,3,0,6,0,8	
			 ];
var c=0;	
var check=0;
$(document).ready(function(){
    $("#i1").keyup(function(){
    	i1(0,9,this,0,0);
    	block_check(0,9,this,0,0);
    });

    $("#i2").keyup(function(){
    	i1(0,9,this,1,0);
    	block_check(0,9,this,1,0);
    });

    $("#i6").keyup(function(){
    	i1(0,9,this,5,3);
    	block_check(0,9,this,5,3);
    });

    $("#i8").keyup(function(){
    	i1(0,9,this,7,6);
    	block_check(0,9,this,7,6);
    });

    $("#i9").keyup(function(){
    	i1(0,9,this,8,6);
    	block_check(0,9,this,8,6);
    });
    $("#i12").keyup(function(){
    	i1(9,18,this,10,0);
    	block_check(9,18,this,10,0);
    });
    $("#i13").keyup(function(){
    	i1(9,18,this,11,0);
    	block_check(9,18,this,11,0);
    });
    $("#i14").keyup(function(){
    	i1(9,18,this,12,3);
    	block_check(9,18,this,12,3);
    });
    $("#i16").keyup(function(){
    	i1(9,18,this,14,3);
    	block_check(9,18,this,14,3);
    });
    $("#i17").keyup(function(){
    	i1(9,18,this,15,6);
    	block_check(9,18,this,15,6);
    });
    $("#i21").keyup(function(){
    	i1(18,27,this,18,0);
    	block_check(18,27,this,18,0);
    });
    $("#i25").keyup(function(){
    	i1(18,27,this,22,3);
    	block_check(18,27,this,22,6);
    });
    $("#i27").keyup(function(){
    	i1(18,27,this,24,6);
    	block_check(18,27,this,24,6);
    });
    $("#i29").keyup(function(){
    	i1(18,27,this,26,6);
    	block_check(18,27,this,26,6);

    });
    $("#i32").keyup(function(){
    	i1(27,36,this,28,0);
    	block_check(27,36,this,28,27);
    });
    $("#i33").keyup(function(){
    	i1(27,36,this,29,0);
    	block_check(27,36,this,29,27);
    });
    $("#i34").keyup(function(){
    	i1(27,36,this,30,3);
    	block_check(27,36,this,30,30);
    });
    $("#i38").keyup(function(){
    	i1(27,36,this,34,6);
    	block_check(27,36,this,34,33);
    });
    $("#i39").keyup(function(){
    	i1(27,36,this,35,6);
    	block_check(27,36,this,35,33);
    });
    $("#i43").keyup(function(){
    	i1(36,45,this,38,0);
    	block_check(36,45,this,38,27);
    });
    $("#i45").keyup(function(){
    	i1(36,45,this,40,3);
    	block_check(36,45,this,40,30);
    });
    $("#i46").keyup(function(){
    	i1(36,45,this,41,3);
    	block_check(36,45,this,41,30);
    });	
    $("#i48").keyup(function(){
    	i1(36,45,this,43,6);
    	block_check(36,45,this,43,33);
    });	
    $("#i52").keyup(function(){
    	i1(45,54,this,46,0);
    	block_check(45,54,this,46,27);
    });	
    $("#i54").keyup(function(){
    	i1(45,54,this,48,3);
    	block_check(45,54,this,48,30);
    });	
    $("#i55").keyup(function(){
    	i1(45,54,this,49,3);
    	block_check(45,54,this,49,30);
    });	
    $("#i57").keyup(function(){
    	i1(45,54,this,51,6);
    	block_check(45,54,this,51,33);
    });		
    $("#i62").keyup(function(){
    	i1(54,63,this,55,0);
    	block_check(54,63,this,55,54);
    });		
    $("#i63").keyup(function(){
    	i1(54,63,this,56,0);
    	block_check(54,63,this,56,54);
    });			
    $("#i65").keyup(function(){
    	i1(54,63,this,58,3);
    	block_check(54,63,this,58,57);
    });	
    $("#i69").keyup(function(){
    	i1(54,63,this,62,6);
    	block_check(54,63,this,62,60);
    });	
    $("#i71").keyup(function(){
    	i1(63,72,this,63,0);
    	block_check(63,72,this,63,54);
    });	
    $("#i75").keyup(function(){
    	i1(63,72,this,67,3);
    	block_check(63,72,this,67,57);
    });	
    $("#i76").keyup(function(){
    	i1(63,72,this,68,3);
    	block_check(63,72,this,68,57);
    });	
    $("#i77").keyup(function(){
    	i1(63,72,this,69,6);
    	block_check(63,72,this,69,60);
    });	
    $("#i78").keyup(function(){
    	i1(63,72,this,70,6);
    	block_check(63,72,this,70,60);
    });	
    $("#i81").keyup(function(){
    	i1(72,81,this,72,0);
    	block_check(72,81,this,72,54);
    });
    $("#i83").keyup(function(){
    	i1(72,81,this,74,0);
    	block_check(72,81,this,74,54);
    });	
    $("#i84").keyup(function(){
    	i1(72,81,this,75,3);
    	block_check(72,81,this,75,57);
    });	
    $("#i86").keyup(function(){
    	i1(72,81,this,77,3);
    	block_check(72,81,this,77,57);
    });	
    $("#i88").keyup(function(){
    	i1(72,81,this,79,6);
    	block_check(72,81,this,79,60);
    });	
});


function i1(first,last,z,index,block){
var num=$(z).val();
c=0;
Arr[index]=num;
var sum=index;
if(index>=27&&index<=36)
	sum=sum-9*3;
	
if(index>=36&&index<=45)
	sum=sum-9*4;
	
if(index>=45&&index<=54)
	sum=sum-9*5;
	
if(index>=54&&index<=63)
	sum=sum-9*6;
	
if(index>=63&&index<=72)
	sum=sum-9*7;
	
if(index>=72&&index<=81)
	sum=sum-9*8;
	
if(index>=81&&index<=89)
	sum=sum-9*9;
	


		for(i=first;i<last;i++){
		
			if(sum==index){
				sum=sum+9;
				continue;

			}
			else{			
				if(num==Arr[sum]){//for column checking
					c=1;	
					
				}sum=sum+9;
		}}

for(i=first;i<last;i++){

			if(i==index)
				continue;
			else{
					if(num==Arr[i]){// for row checking
						c=1;
								}
				  }
		}
    
/*
var s=block;
		for (var h = first; h < last; h++) { //for block
				
				if((h%3==0)&&(h>first))
					s=s+6;

				if(s==index){
					s++;
					continue;
				}
				else{
					if(num==Arr[s++])
						c=1;
				}
				
		}*/

 
		

}
	

function block_check(first,last,z,index,block){
var num=$(z).val();
var s=block;

		for (var h = first; h < last; h++) { //for block
		
				if((h%3==0)&&(h>first))
					s=s+6;

				if(s==index){
					s++;
					continue;
				}
				else{		
					if(num==Arr[s++]){
						
						c=1;
					}
				}
						
				
		}

    if(c==1)
					$(z).css({ 'color': 'red'});
				else
					$(z).css({ 'color': 'blue'});
	

}