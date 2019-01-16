$("#pizza").click(function() {
    $("#door").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#Derp").show();
}); 
$("#Derp").dblclick(function() {
    $("#door").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#Derp").hide();
});

$("#door").click(function() {
    $("#pizza").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#pizza").hide();
    $("#exploding").show();
});
$("#exploding").dblclick(function() {
    $("#pizza").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#pizza").show();
    $("#exploding").hide();
});
$("#joke").click(function() {
    $("#pizza").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#pizza").hide();
    $("#door").hide();
    $("#yolk").show();
});
$("#yolk").dblclick(function() {
    $("#pizza").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#pizza").show();
    $("#door").show();
    $("#yolk").hide();
});
$("#light").click(function() {
    $("#pizza").hide();
    $("#door").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#joke").hide();
    $("#lit").show();
});
$("#lit").dblclick(function() {
    $("#pizza").show();
    $("#door").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#joke").show();
    $("#lit").hide();
});
$("#alarm").click(function() {
    $("#pizza").hide();
    $("#door").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#joke").hide();
    $("#twelve").show();
});
$("#twelve").dblclick(function() {
    $("#pizza").show();
    $("#door").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#joke").show();
    $("#twelve").hide();
});
$("#nine").click(function() {
    $("#pizza").hide();
    $("#door").hide();
    $("#nine").hide();
    $("#joke").hide();
    $("#light").hide();
    $("#alarm").hide();
    $("#joke").hide();
    $("#car").show();
});
$("#car").dblclick(function() {
    $("#pizza").show();
    $("#door").show();
    $("#nine").show();
    $("#joke").show();
    $("#light").show();
    $("#alarm").show();
    $("#joke").show();
    $("#car").hide();
});


