import 'bootstrap/dist/css/bootstrap.css';
function JobCard() {
  return (
    <div>
    <div className="card  my-[20px] ml-[10px]">
  <h5 className="card-header">FrontEnd Development</h5>
  <div className="card-body">
    <h5 className="card-title text-info">Part time</h5>
    <p className="card-text">Prishtine</p>
    <div >
    <a href="#" className="btn btn-primary">Apply</a>
    <a href="#" className="btn btn-primary ml-[20px]">Save Job</a>
    </div>
  </div>
 </div>


 </div>
  );
}

export default JobCard;