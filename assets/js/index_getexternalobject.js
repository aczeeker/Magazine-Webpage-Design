/*
@ZeekEr	
Arthur Choi 200469870

    Script description:
    The following script to load tagged object from another tagged object.
    To read the title, published date and icon on represent pages.
*/
//Read from the extental html tagged object
$(document).ready(function() {
    $("#news1_title").load('news1.html #news1_title')
});
$(document).ready(function() {
    $("#news1_published").load('news1.html #news1_published')
});
$(document).ready(function() {
    $("#news1_icon").load('news1.html #news1_icon')
});
$(document).ready(function() {
    $("#news2_title").load('news2.html #news2_title')
});
$(document).ready(function() {
    $("#news2_published").load('news2.html #news2_published')
});
$(document).ready(function() {
    $("#news2_icon").load('news2.html #news2_icon')
});
$(document).ready(function() {
    $("#news3_title").load('news3.html #news3_title')
});
$(document).ready(function() {
    $("#news3_published").load('news3.html #news3_published')
});
$(document).ready(function() {
    $("#news3_icon").load('news3.html #news3_icon')
});
$(document).ready(function() {
    $("#news4_title").load('news4.html #news4_title')
});
$(document).ready(function() {
    $("#news4_published").load('news4.html #news4_published')
});
$(document).ready(function() {
    $("#news4_icon").load('news4.html #news4_icon')
});

//Preload the Post contant
$(document).ready(function() {
    $("#Focus_title").load('news1.html #news1_title')
});
$(document).ready(function() {
    $("#Focus_published").load('news1.html #news1_published')
});
$(document).ready(function() {
    $("#Focus_ScreenShot").load('news1.html #news1_icon')
});
$(document).ready(function() {
    $("#Focus_Summary").load('news1.html #news1_summary')
});
$(document).ready(function() {
    $("#Focus_Btn").attr("href", 'news1.html')
});

//Switch the Post contant
function news1function() {
    $("#Focus_title").load('news1.html #news1_title');
    $("#Focus_published").load('news1.html #news1_published');
    $("#Focus_ScreenShot").load('news1.html #news1_icon');
    $("#Focus_Summary").load('news1.html #news1_summary');
    $("#Focus_Btn").attr("href", "news1.html");
}

function news2function() {
    $("#Focus_title").load('news2.html #news2_title');
    $("#Focus_published").load('news2.html #news2_published');
    $("#Focus_ScreenShot").load('news2.html #news2_icon');
    $("#Focus_Summary").load('news2.html #news2_summary');
    $("#Focus_Btn").attr("href", "news2.html");
}

function news3function() {
    $("#Focus_title").load('news3.html #news3_title');
    $("#Focus_published").load('news3.html #news3_published');
    $("#Focus_ScreenShot").load('news3.html #news3_icon');
    $("#Focus_Summary").load('news3.html #news3_summary');
    $("#Focus_Btn").attr("href", "news3.html");
}

function news4function() {
    $("#Focus_title").load('news4.html #news4_title');
    $("#Focus_published").load('news4.html #news4_published');
    $("#Focus_ScreenShot").load('news4.html #news4_icon');
    $("#Focus_Summary").load('news4.html #news4_summary');
    $("#Focus_Btn").attr("href", "news4.html");
}