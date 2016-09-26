


$(document).ready(function(){
    
    $('.github img').hover(
        function(){             
            $(this).attr('src', $(this).attr('src').replace('img/github.svg','img/github_noir.svg'));
            },
        function(){
             $(this).attr('src', $(this).attr('src').replace('img/github_noir.svg','img/github.svg'));
             }
    );
    
    $('.linkedin img').hover(
        function(){             
            $(this).attr('src', $(this).attr('src').replace('img/linkedin.svg','img/linkedin_noir.svg'));
            },
        function(){
             $(this).attr('src', $(this).attr('src').replace('img/linkedin_noir.svg','img/linkedin.svg'));
             }
    );
    $('.gmail img').hover(
        function(){             
            $(this).attr('src', $(this).attr('src').replace('img/gmail.svg','img/gmail_noir.svg'));
            },
        function(){
             $(this).attr('src', $(this).attr('src').replace('img/gmail_noir.svg','img/gmail.svg'));
             }
    );    
    
});