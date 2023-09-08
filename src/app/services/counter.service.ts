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

  //Sub Course
  getSubCourse(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}get_subcourse_details_list_by_course_id`, counterdata, { headers });
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
  addlogo(logo: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_logo`, logo, { headers })
  }
  getlogo() {
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
    return this.http.delete(`${url}`, { headers });
  }
  //add product
  addproduct(logo: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_product`, logo, { headers })
  }
  getproduct() {
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
    return this.http.delete(`${url}`, { headers });
  }
  //Subcourse
  addsubcourse(logo: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_subcourse`, logo, { headers })
  }
  getsubcourse() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_subcourses`,{headers})
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
    return this.http.delete(`${url}`, { headers });
  }
  //Subcourse details
  addSubscoursesdetail(subcourses: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_subcourse_details`, subcourses, { headers })
  }
  getSubcoursesdetail() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_subcourse_details_list`, {headers})
  }

  getSubcoursesbyId(Id: number) {
    return this.http.get(`${this.apiUrl}get_subcourse_details/${Id}`)
  }


  deleteSubcoursedetail(id: number): Observable<any> {
    const url = `${this.apiUrl}delete_subcourse_details/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(url, { headers });
  }

  updatesubcoursedetail(id: number, logo: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_subcourse_details/${id}`;
    return this.http.post(url, logo, { headers });
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
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_certificate`,{headers})
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
    return this.http.post(`${this.apiUrl}add_about_counter`, counterdata, { headers });
  }

  getaboutcounter() {
    return this.http.get(`${this.apiUrl}get_about_counter`)
  }

  deletecounter(id: number) {
    const url = `${this.apiUrl}delete_about_counter/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updateabout(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_about_counter/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //add module
  addmodule(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_module`, counterdata, { headers });
  }

  getmodule() {
    return this.http.get(`${this.apiUrl}get_module`)
  }

  deletemodule(id: number) {
    const url = `${this.apiUrl}delete_module/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatemodule(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_module/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }

  //syllabus details
  addsyllabus(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_syllabus`, counterdata, { headers });
  }

  getsyllabus() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_syllabus`,{headers})
  }

  deletesyllabus(id: number) {
    const url = `${this.apiUrl}delete_syllabus/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatesyllabus(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_syllabus/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //learner review

  addlearner(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_learner_review`, counterdata, { headers });
  }

  getlearner() {
    return this.http.get(`${this.apiUrl}get_learner_review`)
  }

  deletelearner(id: number) {
    const url = `${this.apiUrl}delete_learner_review/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatelearner(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_learner_review/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }

  //program city

  addcity(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_our_program_cities`, counterdata, { headers });
  }

  getcity() {
    return this.http.get(`${this.apiUrl}get_our_program_cities`)
  }

  deletecity(id: number) {
    const url = `${this.apiUrl}delete_our_program_cities/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatecity(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_our_program_cities/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //add_counselling
  addcouns(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_counselling`, counterdata, { headers });
  }

  getcouns() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_counselling`,{headers})
  }

  deletecouns(id: number) {
    const url = `${this.apiUrl}delete_counselling/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatecouns(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_counselling/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //course highlight
  addcoursehigh(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_highlightDetails`, counterdata, { headers });
  }

  getcoursehigh() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_highlightDetails`,{headers})
  }

  deletecoursehigh(id: number) {
    const url = `${this.apiUrl}delete_highlightDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatecoursehigh(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_highlightDetails/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //highlights
  addhigh(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_highlight`, counterdata, { headers });
  }

  gethigh() {
    return this.http.get(`${this.apiUrl}get_highlight`)
  }

  deletehigh(id: number) {
    const url = `${this.apiUrl}delete_highlight/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatehigh(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_highlight/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }
  //training_student
  addstudent(counterdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_trainedStudentsCount`, counterdata, { headers });
  }

  getstudent() {
    return this.http.get(`${this.apiUrl}get_trainedStudentsCount`)
  }

  deletestudent(id: number) {
    const url = `${this.apiUrl}delete_trainedStudentsCount/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updatestudent(id: number, teacherdata: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_trainedStudentsCount/${id}`;
    return this.http.post(url, teacherdata, { headers });
  }

  //add teacher

  addteacher(teacherdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_teacher`, teacherdata, { headers })
  }
  getteacher() {
    return this.http.get(`${this.apiUrl}get_teacher`)
  }
   deleteteacher() {
    return this.http.get(`${this.apiUrl}delete_teacher`)
  }

  addgooglereview(review: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_googleReview`, review, { headers })
  }
  getgooglereview() {
    return this.http.get(`${this.apiUrl}get_googleReview`)
  }
  deletebgooglereview(id: number) {
    const url = `${this.apiUrl}delete_googleReview/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updategooglereview(id: number, google: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_googleReview/${id}`;
    return this.http.post(url, google, { headers });
  }

  //Contact Page
  getcontact() {
    return this.http.get(`${this.apiUrl}get_contact`)
  }

  deletecontact(id: number) {
    const url = `${this.apiUrl}delete_contact/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }

  //Company Details
  addCompany(company: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_companyDetails`, company, { headers })
  }
  getCompany() {
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
    return this.http.delete(`${url}`, { headers });
  }
  //Our office
  addoffice(office: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_ourOffice`, office, { headers })
  }
  getoffice() {
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
    return this.http.delete(`${url}`, { headers });
  }


  //Event Page

  //Event 
  addevent(event: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_events`, event, { headers })
  }
  getevent() {
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
    return this.http.delete(`${url}`, { headers });
  }

  //Event Details

  addeventdetail(eventdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_eventDetails`, eventdata, { headers })
  }
  geteventdetail() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_eventDetails`, { headers })
  }
  deleteeventdetail(id: number) {
    const url = `${this.apiUrl}delete_eventDetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  //Our Program Page
  //Our program

  addourprogram(program: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_coursecategory`, program, { headers })

  }

  getourprogram() {
    return this.http.get(`${this.apiUrl}get_coursecategory`)
  }
  deleteourpgm(id: number) {
    const url = `${this.apiUrl}delete_coursecategory/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updateprogram(id: number, program: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_coursecategory/${id}`;
    return this.http.post(url, program, { headers });
  }

  //Our Program Details

  addprogramdetail(eventdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_programdetails`, eventdata, { headers })
  }
  getprogramdetail() {

    return this.http.get(`${this.apiUrl}get_programdetails`)
  }
  deletepgmdetail(id: number) {
    const url = `${this.apiUrl}delete_programdetails/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updateprogramdetails(id: number, program: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_programdetails/${id}`;
    return this.http.post(url, program, { headers });
  }

  
  //program category

  addprogramdetailcategory(eventdata: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_feecategory`, eventdata, { headers })
  }
  getprogramdetailcategory() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_feecategory`, { headers })
  }
  deletepgmdetailcategory(id: number) {
    const url = `${this.apiUrl}delete_feecategory/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }
  updateprogramdetailscategory(id: number, program: any) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    const url = `${this.apiUrl}update_feecategory/${id}`;
    return this.http.post(url, program, { headers });
  }

  //Broucher

  addbroucher(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_brochuer`, data, { headers })
  }
  getbroucher() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });

    return this.http.get(`${this.apiUrl}get_brochuer`, { headers })
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
    return this.http.delete(`${url}`, { headers });
  }




  //New WebSite
  //banner
  addbanner(banner: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_bannerImages`, banner, { headers })
  }
  getbanner() {
    return this.http.get(`${this.apiUrl}get_bannerImages`)
  }


  deletebanner(id: number) {
    const url = `${this.apiUrl}delete_bannerImages/${id}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${url}`, { headers });
  }

  //hire
  addhire(hired: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_hired`, hired, { headers })
  }
  gethire() {
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
    return this.http.delete(`${url}`, { headers });
  }

  //Mentor

  addmentor(mentor: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_mentor`, mentor, { headers })
  }
  getmentor() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_mentors`,{headers})
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
    return this.http.delete(`${url}`, { headers });
  }

  //Faq

  addfaq(faq: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_faq`, faq, { headers })
  }
  getfaq() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_faq`,{headers})
  }
  getfaq1() {
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
    return this.http.delete(`${url}`, { headers });
  }

  //Alumini

  addalumini(alumini: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_alumini`, alumini, { headers })
  }
  getalumini() {
    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_all_alumini`,{headers})
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
    return this.http.delete(url, { headers });
  }


  //Program Fees

  addProgramFees(data: any) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_course_fee_details`, data, { headers })
  }
  getProgramFees() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get(`${this.apiUrl}get_course_fee_details_list`, { headers })
  }
  updateProgramFees(id: number, alumniData: any) {

    const url = `${this.apiUrl}update_course_fee_details/${id}`;
    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, alumniData, { headers });
  }


  // deleteProgramFees(id: number): Observable<any> {
  //   const url = `${this.apiUrl}delete_course_fee_details/${id}`;
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.auth.getToken()}`
  //   });
  //   return this.http.delete(url, { headers });
  // }

  deleteProgramFees(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${this.apiUrl}delete_course_fee_details/${id}`, { headers });
  }


  //Cohorts Date

  // POST: Create a new batch
  addBatch(batchData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_next_cohorts_dates`, batchData, { headers });
  }

  // GET: Get list of batches
  getBatches(): Observable<any[]> {

    return this.http.get<any[]>(`${this.apiUrl}get_next_cohorts_dates`);
  }

  // DELETE: Delete a batch by ID
  deleteBatch(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${this.apiUrl}delete_next_cohorts_dates/${id}`, { headers });
  }

  //Handson Category
  addHandosnCategory(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_handson_category`, data, { headers });
  }


  getHandsonCategory(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get<any[]>(`${this.apiUrl}get_category`, { headers });
  }
  getHandsonCategorybyid(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get<any[]>(`${this.apiUrl}get_course_fee_details_by_course_id`, { headers });
  }
  

  deleteHandsonCategory(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${this.apiUrl}delete_handson_category/${id}`, { headers });
  }

  updateHandsonCategory(id: number, data: any) {

    const url = `${this.apiUrl}update_handson_category/${id}`;
    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, data, { headers });
  }

  // Handson Project Details
  addHandosnProject(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${this.apiUrl}add_handson_project_details`, data, { headers });
  }


  getHandsonProject(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.get<any[]>(`${this.apiUrl}get_handson_project_details`, { headers });
  }

  deleteHandsonProject(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.delete(`${this.apiUrl}delete_handson_project_details/${id}`, { headers });
  }

  updateHandsonProject(id: number, data: any) {

    const url = `${this.apiUrl}update_handson_project_details/${id}`;
    const headers = new HttpHeaders({

      'Authorization': `Bearer ${this.auth.getToken()}`
    });
    return this.http.post(`${url}`, data, { headers });
  }
}





