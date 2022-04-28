import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, IonTabBar } from '@ionic/angular';
import { ListService } from "../list.service";

@Component({
  selector: 'app-pruebas2',
  templateUrl: './pruebas2.page.html',
  styleUrls: ['./pruebas2.page.scss'],
})
export class Pruebas2Page implements OnInit {
  @ViewChild('myTabs',{static:false}) tabRef:IonTabBar;
  @ViewChild('myTabs',{static:false}) listRef:IonList;
  tabs:any;
  tabIndex:number;
  reorder:boolean;

  constructor(private listService:ListService, private alertController:AlertController) { 
    this.tabs=[
      {label:'School', icon:'school',list:[]},
      {label:'Home', icon:'home',list:[]},
    ];
    this.tabs.forEach((tab, index)=>{
      tab.list=this.listService.getList(index);
    });
    this.tabIndex=0;
    this.reorder= false;
  }
  toggleReorder(){
    this.reorder=!this.reorder;
    this.listRef.closeSlidingItems();
  }
  setTab(tabIndex){
    this.tabIndex=tabIndex;
    this.setTab=this.tabs[this.tabIndex].label;
  }
  async deleteItem(item?){
    const alert=await this.alertController.create({
      header:item === undefined? 'Delete all':'Delete item',
      message:'Are you sure',
      buttons:[
        {
          text:'OK',
          handler:()=>{
            this.listRef.closeSlidingItems();
            if(item === undefined){
              this.listService.deleteList(this.tabIndex);
            }
            else{
              this.listService.deleteItem(this.tabIndex, item);
            }
          }
        },{
          text:'CANCEL',
          role:'cancel'
        }
      ]
    });
    await alert.present();
  }
  moveItem(indexes){
    this.listService.moveItem(this.tabIndex, indexes.from, indexes.to);
    indexes.complete();
  }
  ngOnInit() {
  }

}
