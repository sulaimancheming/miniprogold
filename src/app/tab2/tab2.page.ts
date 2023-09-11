import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  documents: Array<any>;
  formatted: string;
  day: Date;
  constructor(private firestore: Firestore) {
    const collectionRef = collection(firestore, 'member');
    collectionData(collectionRef, { idField: 'doc_id' }).subscribe(response => {
      this.documents = response;

    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
