import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-studentsdetails',
  templateUrl: './studentsdetails.component.html',
  styleUrls: ['./studentsdetails.component.css']
})
export class StudentsdetailsComponent implements OnInit{

  studentArr:any[]=[];
  student:any={
    Sno:"",
    Id:"",
    FullName:"",
    Mobile:"",
    email:"",
    Address:""

  };
  constructor(){ }

  ngOnInit(): void {
    const  localData=localStorage.getItem('studentList');
    if(localData !=null){
      this.studentArr=JSON.parse(localData);
    } 
  }
  OnAddStudent(){
    const notNull=document.getElementById('studentModel');
    if(notNull!=null){
      notNull.style.display='block'};
      this.student={
        Sno:0,
        Id:"",
        FullName:"",
        Mobile:"",
        email:"",
        Address:""
    
      };
    
  }
  OnClosemodel(){
    const notNull=document.getElementById('studentModel');
    if(notNull!=null){
      notNull.style.display='none';
      
    }

  }
  OnDelete(index:number){
      this.studentArr.splice(index,1);
      localStorage.setItem('studentList',JSON.stringify(this.studentArr)); 
    }
  
  OnEdit(stud:any){
    debugger
    this.OnAddStudent();
    this.student=stud;
     }
  OnUpdate(){
    const  record=this.studentArr.find(res=>res.this.Sno==this.student.Sno);
    record.FullName=this.student.Fullname;
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    this.OnClosemodel();
   }
  saveStudent(data:any){
    debugger;
    this.student.Sno=this.studentArr.length+1;
    this.studentArr.push(this.student);
    this.OnClosemodel();
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    this.student={
      Sno:0,
      Id:"",
      FullName:"",
      Mobile:"",
      email:"",
      Address:""
  
    };
  }

}
