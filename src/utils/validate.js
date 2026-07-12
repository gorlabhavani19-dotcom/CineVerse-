export const checkvalidatedata=(email,password,name,isSign)=>{
    email=email.trim();
    password=password.trim();
    const isEmailvalidate=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if(!isEmailvalidate) return "Email ID Not Valid";
    if(!passwordvalid)return "Password Is Not Valid";
  
    if(!isSign){
        name=name?.trim();
      if(!name||name.length<3){
    return "Name is not valid";
  }
}
    return null;
}