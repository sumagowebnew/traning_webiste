import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private apiUrl = 'https://trainingapi.sumagotest.in/public/api/';

  constructor(private http: HttpClient, private auth: AuthService) { }

  //Home Page
  //Home Counter
  addcounter(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_home_counter`, counterdata, { headers });
  }

  getcounter() {

    return this.http.get(`${this.apiUrl}get_home_counter`)
  }
  updateArchivement(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_home_counter/${id}`;
    return this.http.post(url, archive, { headers });
  }
  deletearchivement(id: number) {
    const url = `${this.apiUrl}delete_home_counter/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }

  //Course
  addcourse(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_course`, counterdata, { headers });
  }

  getcourse() {

    return this.http.get(`${this.apiUrl}get_course`)
  }
  updatecourse(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_course/${id}`;
    return this.http.post(url, archive, { headers });
  }
  deletecourse(id: number) {
    const url = `${this.apiUrl}delete_course/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }


//Home Apply now

  getapply_now() {
    return this.http.get(`${this.apiUrl}get_applyNow`)
  }
  deleteapply_now(id: number) {
    const url = `${this.apiUrl}delete_applyNow/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }



  //Popular course
  getpopularcourse() {
    return this.http.get(`${this.apiUrl}get_popularCourses`)
  }
  addpopularcourse(popularcourse: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_popularCourses`, popularcourse, { headers })
  }

  deletepopular1(id: number) {
    const url = `${this.apiUrl}delete_popularCourses/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }
  updatepopular(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_popularCourses/${id}`;
    return this.http.post(url, archive, { headers });
  }

  //Logo
  addlogo(logo:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_logo`,logo,{headers})
  }
  getlogo(){
    return this.http.get(`${this.apiUrl}get_logo`)
  }
  updatelogo(id: number, logo: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_logo/${id}`;
      return this.http.post(url, logo, { headers });
    }
  deletelogo(id: number) {
    const url = `${this.apiUrl}delete_logo/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  //add product
  addproduct(logo:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_product`,logo,{headers})
  }
  getproduct(){
    return this.http.get(`${this.apiUrl}get_product`)
  }
  updateproduct(id: number, logo: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_product/${id}`;
      return this.http.post(url, logo, { headers });
    }
  deleteproduct(id: number) {
    const url = `${this.apiUrl}delete_product/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  //Subcourse
  addsubcourse(logo:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_subcourse`,logo,{headers})
  }
  getsubcourse(){
    return this.http.get(`${this.apiUrl}get_subcourse`)
  }
  updatesubcourse(id: number, logo: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_subcourse/${id}`;
      return this.http.post(url, logo, { headers });
    }
  deletesubcourse(id: number) {
    const url = `${this.apiUrl}delete_subcourse/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  //Popular details

  deletepopular(id: number) {
    const url = `${this.apiUrl}delete_popularCoursesDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }
  getpopularcoursedetails() {
    return this.http.get(`${this.apiUrl}get_popularCoursesDetails`)
  }
  addpopularcoursedetail(popularcourse: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_popularCoursesDetails`, popularcourse, { headers })
  }
  updatepopulardetail(id: number, archive: any) {


    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_popularCoursesDetails/${id}`;
    return this.http.post(url, archive, { headers });
  }



  //Certificate

  addcertificate(certificate: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_certificate`, certificate, { headers })
  }
  getcertificate() {
    return this.http.get(`${this.apiUrl}get_certificate`)
  }
  deletecertificate(id: number) {
    const url = `${this.apiUrl}delete_certificate/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }



  //Expert Review

  addexpertreview(expert: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_expertReview`, expert, { headers })
  }
  getexpertreview() {
    return this.http.get(`${this.apiUrl}get_expertReview`)
  }

  updateExpert(id: number, expert: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_expertReview/${id}`;
    return this.http.post(url, expert, { headers });
  }

  deleteexpert(id: number): Observable<any> {
    const url = `${this.apiUrl}delete_expertReview/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }

  //Consulting

  addconsulting(consult: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_consulting`, consult, { headers })
  }
  getconsulting() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_consulting`, { headers })
  }
  updateconsulting(id: number, consult: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_expertReview/${id}`;
    return this.http.post(url, consult, { headers });
  }

  deleteconsulting(id: number) {
    const url = `${this.apiUrl}delete_consulting/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }

  //About Page

  addaboutcounter(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_about_counter`, counterdata,{headers});
    }
  
    getaboutcounter() {
      return this.http.get(`${this.apiUrl}get_about_counter`)
    }

    deletecounter(id:number){
      const url = `${this.apiUrl}delete_about_counter/${id}`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.delete(`${url}`,{headers});
    }
    updateabout(id: number, teacherdata: any) {

      const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
        });
        
        const url = `${this.apiUrl}update_about_counter/${id}`;
        return this.http.post(url, teacherdata, { headers });
      }


    addteacher(teacherdata:any){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.post(`${this.apiUrl}add_teacher`,teacherdata,{headers})
    }
    getteacher(){
      return this.http.get(`${this.apiUrl}get_teacher`)
    }
    
    addgooglereview(review:any){
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.post(`${this.apiUrl}add_googleReview`,review,{headers})
    }
    getgooglereview(){
      return this.http.get(`${this.apiUrl}get_googleReview`)
    }
    deletebgooglereview(id: number) {
      const url = `${this.apiUrl}delete_googleReview/${id}`;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      });
      return this.http.delete(`${url}`,{headers});
    }
    updategooglereview(id: number, google: any) {

      const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
        });
        
        const url = `${this.apiUrl}update_googleReview/${id}`;
        return this.http.post(url, google, { headers });
      }
      
      //Contact Page
      getcontact(){
        return this.http.get(`${this.apiUrl}get_contact`)
      }
    
      deletecontact(id: number) {
        const url = `${this.apiUrl}delete_contact/${id}`;
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        });
        return this.http.delete(`${url}`,{headers});
      }

      //Company Details
      addCompany(company:any){
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        });
        return this.http.post(`${this.apiUrl}add_companyDetails`,company,{headers})
      }
      getCompany(){
        return this.http.get(`${this.apiUrl}get_companyDetails`)
      }
      updateCompany(id: number, event: any) {
    
        const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
          });
          
          const url = `${this.apiUrl}update_companyDetails/${id}`;
          return this.http.post(url, event, { headers });
        }
      deleteCompany(id: number) {
        const url = `${this.apiUrl}delete_companyDetails/${id}`;
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        });
        return this.http.delete(`${url}`,{headers});
      }
      //Our office
      addoffice(office:any){
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        });
        return this.http.post(`${this.apiUrl}add_ourOffice`,office,{headers})
      }
      getoffice(){
        return this.http.get(`${this.apiUrl}get_ourOffice`)
      }
      updateoffice(id: number, office: any) {
    
        const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
          });
          
          const url = `${this.apiUrl}update_ourOffice/${id}`;
          return this.http.post(url, office, { headers });
        }
      deleteoffice(id: number) {
        const url = `${this.apiUrl}delete_ourOffice/${id}`;
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${this.auth.getToken()}`
        });
        return this.http.delete(`${url}`,{headers});
      }


      //Event Page

       //Event 
  addevent(event:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_events`,event,{headers})
  }
  getevent(){
    return this.http.get(`${this.apiUrl}get_events`)
  }
  updateevent(id: number, event: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_events/${id}`;
      return this.http.post(url, event, { headers });
    }
  deleteevent(id: number) {
    const url = `${this.apiUrl}delete_events/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Event Details
  
  addeventdetail(eventdata:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_eventDetails`,eventdata,{headers})
  }
  geteventdetail(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_eventDetails`,{headers})
  }
  deleteeventdetail(id: number) {
    const url = `${this.apiUrl}delete_eventDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  //Our Program Page
   //Our program

   addourprogram(program:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_coursecategory`,program,{headers})

  }

  getourprogram(){
    return this.http.get(`${this.apiUrl}get_coursecategory`)
  }
  deleteourpgm(id: number) {
    const url = `${this.apiUrl}delete_coursecategory/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  updateprogram(id: number, program: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_coursecategory/${id}`;
      return this.http.post(url, program, { headers });
    }

    //Our Program Details

  addprogramdetail(eventdata:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_programdetails`,eventdata,{headers})
  }
  getprogramdetail(){
   
    return this.http.get(`${this.apiUrl}get_programdetails`)
  }
  deletepgmdetail(id: number) {
    const url = `${this.apiUrl}delete_programdetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
  updateprogramdetails(id: number, program: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_programdetails/${id}`;
      return this.http.post(url, program, { headers });
    }
  
  //Broucher
  
  addbroucher(data:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_brochuer`,data,{headers})
  }
  getbroucher(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
   
    return this.http.get(`${this.apiUrl}get_brochuer`,{headers})
  }
  updatebrochuer(id: number, program: any) {

    const headers = new HttpHeaders({
    'Authorization': `Bearer ${this.auth.getToken()}`
      });
      
      const url = `${this.apiUrl}update_brochuer/${id}`;
      return this.http.post(url, program, { headers });
    }
  deletebroucher(id: number) {
    const url = `${this.apiUrl}delete_brochuer/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }
 



  //New WebSite
   //banner
   addbanner(banner:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_bannerImages`,banner,{headers})
  }
  getbanner(){
    return this.http.get(`${this.apiUrl}get_bannerImages`)
  }
  deletebanner(id: number) {
    const url = `${this.apiUrl}delete_bannerImages/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //hire
  addhire(hired:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_hired`,hired,{headers})
  }
  gethire(){
    return this.http.get(`${this.apiUrl}get_hired`)
  }
  updatehire(id: number, hire: any) {

    const url = `${this.apiUrl}update_hired/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, hire, { headers });
  }
  deletehire(id: number) {
    const url = `${this.apiUrl}delete_hired/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Mentor

  addmentor(mentor:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_mentor`,mentor,{headers})
  }
  getmentor(){
    return this.http.get(`${this.apiUrl}get_mentor`)
  }
  updatementor(id: number, mentor: any) {

    const url = `${this.apiUrl}update_mentor/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, mentor, { headers });
  }
  deletementor(id: number) {
    const url = `${this.apiUrl}delete_mentor/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Faq

  addfaq(faq:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_faq`,faq,{headers})
  }
  getfaq(){
    return this.http.get(`${this.apiUrl}get_faq`)
  }
  updatefaq(id: number, faq: any) {

    const url = `${this.apiUrl}update_faq/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, faq, { headers });
  }
  deletebfaq(id: number) {
    const url = `${this.apiUrl}delete_faq/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`,{headers});
  }

  //Alumini

  addalumini(alumini:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_alumini`,alumini,{headers})
  }
  getalumini(){
    return this.http.get(`${this.apiUrl}get_alumini`)
  }
  updateAlumni(id: number, alumniData: any) {

    const url = `${this.apiUrl}update_alumini/${id}`;
    const headers = new HttpHeaders({
      
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, alumniData, { headers });
  }
 

  deletealumini(id: number): Observable<any> {
    const url = `${this.apiUrl}delete_alumini/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url,{headers});
  }

}





