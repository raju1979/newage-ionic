import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  private todo : FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { 
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  logForm(){
    console.log(this.todo.value)
  }

}
