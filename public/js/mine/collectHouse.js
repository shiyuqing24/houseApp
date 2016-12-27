/**
 * Created by Administrator on 2016/12/24 0024.
 */
var demand = document.getElementsByClassName("t1")[0];
var listing = document.getElementsByClassName("house")[0];
var demands = document.getElementsByClassName("demand")[0];
var listings = document.getElementsByClassName("listing")[0];
demand.onclick = function(){
    demands.style.display = 'block';
    listings.style.display = 'none';
    demand.setAttribute("class","t1 active" );
    listing.setAttribute("class","house" );
};
listing.onclick = function(){
    demands.style.display = 'none';
    listings.style.display = 'block';
    demand.setAttribute("class","t1" );
    listing.setAttribute("class","house active" );
};
