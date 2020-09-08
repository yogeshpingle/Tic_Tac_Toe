var PlayerCode = 1,Round_Number = 1;
//alert("1");
function Box_Click(Box_Id_Num)
{
    //alert(Box_Id_Num);
    //alert("<" + document.getElementById(Box_Id_Num).innerHTML + ">");    
    if(document.getElementById(Box_Id_Num).innerHTML == "")
    {
        SymbolInserter(Box_Id_Num,PlayerCode);
        ExtraWorker();
    }
    //alert(Box_Id_Num);
}

function SymbolInserter(Box_Id_Num,PlayerCode_In)
{
    var Symbol;
    
    if(PlayerCode_In == 1)
    {
        Symbol = "X";
        PlayerCode = 2;
    }
    else if(PlayerCode_In == 2)
    {
        Symbol = "O";
        PlayerCode = 1;
    }

    document.getElementById(Box_Id_Num).innerHTML = Symbol;
}

function ExtraWorker()
{
    var Returned = WinnerFinder();

    if(Returned == 1)
        NewRoundMaker(PlayerCode);
        //alert("<1>");
    else if(Returned == 2)
        TieDecider();
        //alert("<2>");
}

function WinnerFinder()
{
    var Play_Arena_Box_1,Play_Arena_Box_2,Play_Arena_Box_3,Play_Arena_Box_4,Play_Arena_Box_5,Play_Arena_Box_6,Play_Arena_Box_7,Play_Arena_Box_8,Play_Arena_Box_9;

    Play_Arena_Box_1 = document.getElementById("Play_Arena_Box_1");
    Play_Arena_Box_2 = document.getElementById("Play_Arena_Box_2");
    Play_Arena_Box_3 = document.getElementById("Play_Arena_Box_3");
    Play_Arena_Box_4 = document.getElementById("Play_Arena_Box_4");
    Play_Arena_Box_5 = document.getElementById("Play_Arena_Box_5");
    Play_Arena_Box_6 = document.getElementById("Play_Arena_Box_6");
    Play_Arena_Box_7 = document.getElementById("Play_Arena_Box_7");
    Play_Arena_Box_8 = document.getElementById("Play_Arena_Box_8");
    Play_Arena_Box_9 = document.getElementById("Play_Arena_Box_9");

    if(Play_Arena_Box_1.innerHTML == Play_Arena_Box_2.innerHTML && Play_Arena_Box_1.innerHTML == Play_Arena_Box_3.innerHTML && Play_Arena_Box_1.innerHTML != "" && Play_Arena_Box_2.innerHTML != "" && Play_Arena_Box_3.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_4.innerHTML == Play_Arena_Box_5.innerHTML && Play_Arena_Box_4.innerHTML == Play_Arena_Box_6.innerHTML && Play_Arena_Box_4.innerHTML != "" && Play_Arena_Box_5.innerHTML != "" && Play_Arena_Box_6.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_7.innerHTML == Play_Arena_Box_8.innerHTML && Play_Arena_Box_7.innerHTML == Play_Arena_Box_9.innerHTML && Play_Arena_Box_7.innerHTML != "" && Play_Arena_Box_8.innerHTML != "" && Play_Arena_Box_9.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_1.innerHTML == Play_Arena_Box_4.innerHTML && Play_Arena_Box_1.innerHTML == Play_Arena_Box_7.innerHTML && Play_Arena_Box_1.innerHTML != "" && Play_Arena_Box_4.innerHTML != "" && Play_Arena_Box_7.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_2.innerHTML == Play_Arena_Box_5.innerHTML && Play_Arena_Box_2.innerHTML == Play_Arena_Box_8.innerHTML && Play_Arena_Box_2.innerHTML != "" && Play_Arena_Box_5.innerHTML != "" && Play_Arena_Box_8.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_3.innerHTML == Play_Arena_Box_6.innerHTML && Play_Arena_Box_3.innerHTML == Play_Arena_Box_9.innerHTML && Play_Arena_Box_3.innerHTML != "" && Play_Arena_Box_6.innerHTML != "" && Play_Arena_Box_9.innerHTML != "") 
        return 1;        
    else if(Play_Arena_Box_1.innerHTML == Play_Arena_Box_5.innerHTML && Play_Arena_Box_1.innerHTML == Play_Arena_Box_9.innerHTML && Play_Arena_Box_1.innerHTML != "" && Play_Arena_Box_5.innerHTML != "" && Play_Arena_Box_9.innerHTML != "") 
        return 1;
    else if(Play_Arena_Box_3.innerHTML == Play_Arena_Box_5.innerHTML && Play_Arena_Box_3.innerHTML == Play_Arena_Box_7.innerHTML && Play_Arena_Box_3.innerHTML != "" && Play_Arena_Box_5.innerHTML != "" && Play_Arena_Box_7.innerHTML != "") 
        return 1;
    else
        return 2;
}

function TieDecider()
{

}

function NewRoundMaker(PlayerCode_In_2)
{
    if(PlayerCode_In_2 == 1)
        PlayerCode_In_2 = 2
    else if(PlayerCode_In_2 == 2)
        PlayerCode_In_2 = 1

    alert("Well Played Player " + PlayerCode_In_2);

    PlaygroundClearer();

    Round_Number += 1;
    document.getElementById("Round_Details_Id").innerHTML = "Round : " + Round_Number;

    if(Round_Number == 4)
        WinnerPresentation();
    else    
        for(var i = 1;i <= 9;i++)
            document.getElementById("Play_Arena_Box_" + i).innerHTML = "";

}

function WinnerPresentation()
{
    
}

function PlaygroundClearer()
{
    for(var i = 1;i <= 9;i++)
        document.getElementById("Play_Arena_Box_" + i).innerHTML = "";
}