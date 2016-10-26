import {Component} from 'angular2/core';

@Component({
    selector: 'auxiliary-nav-bar',
    template: `
    <header>
<!-- create nav bar design, not complete yet just here for layout image-->
<nav class="navigation">
<div class="nav">
<ul class="topnav" id="myTopnav">
  <li><a class="active" href="initiateStudentAccount.html">Initiate Student Account</a></li>
  <li><a href="#info">My Students</a></li>
  <!--<li><img src="images/emblem.jpg" id="logo" style="width:75px;height:75px;" /></li>-->
  <li><a class="#auxiliaryInfo" href="AuxiliaryInfo.html">Auxiliary Information Form</a></li>
  <li><a href="#about">About</a></li>
  <li class="icon">
    <a href="javascript:void(0);" style="font-size:15px;" onclick="myFunction()">☰</a>
  </li>
  <div class="logo"></div>
</ul>
</div>
</nav>
</header>
    `,
    styleUrls : ['app/auxiliary/create-auxiliary-account.component.css', 'app/student/student-application.component.css']

})

export class AuxiliaryNavBarComponent{

}