import "./CourseOfferedStyles.css"

function CourseOffered() {
  return (
    <div style={{marginBottom:"10px"}}>
        <div className="course_ava">
            <div className="course1_top-head">
                <h1>COURSE OFFERED</h1>
                <p style={{textAlign:"center"}}>(KCHS- Course we are offering)</p>
            </div>
            <form action="" method="POST" enctype="multipart/form-data">
                <p className="header0">
                    <label className="search-pg">Search</label>
                    <select type="text" name="region" id="countries-list" className="searcha" style={{height:"35px", padding:"5px"}} required>
                        <option>select category to view</option>
                        <option></option>
                        <option value="ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN CLINICAL MEDICINE.">ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN CLINICAL MEDICINE.</option>
                        <option value="ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN PHARMACEUTICAL SCIENCE">ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN PHARMACEUTICAL SCIENCE</option>
                        <option value="ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN NURSING">ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN NURSING</option>
                        <option value="ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN IN CLINICAL DENTISTRY">ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN IN CLINICAL DENTISTRY</option>
                        <option value="ORDINARY DIPLOMA / TECHNICIAN CERTIFICATE IN ENVIRONMENTAL HEALTH SCIENCES:">ORDINARY DIPLOMA / TECHNICIAN CERTIFICATE IN ENVIRONMENTAL HEALTH SCIENCES:</option>
                        <option value="ORDINARY DIPLOMA/ TECHNICIAN CERTIFICATE IN HEALTH RECORDS MANAGEMENT">ORDINARY DIPLOMA/ TECHNICIAN CERTIFICATE IN HEALTH RECORDS MANAGEMENT</option>
                        <option value="ORDINARY DIPLOMA/ TECHNICIAN CERTIFICATE IN SOCIAL WORK">ORDINARY DIPLOMA/ TECHNICIAN CERTIFICATE IN SOCIAL WORK</option>
                        <option value="ORDINARY DIPLOMA / TECHNICIAN CERTIFICATE IN MEDICAL LABORATORY.">ORDINARY DIPLOMA / TECHNICIAN CERTIFICATE IN MEDICAL LABORATORY.</option>
                    </select>
                </p>
                <p style={{margin:"0"}}>
                    <div name="district" id="states-list" value="">
                        <div style={{marginTop:"10px", clear:"both", overflow:"hidden"}} className="available_c1">
                            <h2 className="header1av">ORDINARY DIPLOMA/TECHNICIAN CERTIFICATE IN CLINICAL MEDICINE.</h2>
                            <div className="adee">
                                <h2 className="header2av" style={{backgroundColor:"#fffafa !important"}}>Program Details</h2>
                                <table className="tbl" border="0">
                                    <tr>
                                        <td className="ase">Qualification</td>
                                        <td className="asey">
                                            <p>Qualification	Holders of Certificate of Secondary Education Examination (CSEE) with at least Four (4) passes in non-religious subjects including Chemistry and Biology (Four passes: Chemistry = D; Biology = D and 2 “D” in any other subject except religious subject.)</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ase">Capacity</td>
                                        <td className="asey">As per joining Instruction</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="adee">
                                <h2 className="header2av" style={{backgroundColor:"#fffafa !important"}}>Fee Structure</h2>
                                <table className="tbl" border="0">
                                    <tr>
                                        <td className="ase">School Fee</td>
                                        <td className="asey">• School fees (ADA) 1,600,000/=per year (KWA MWAKA).<br/> • Accommodation (KULALA) 200,000 per year (KWA MWAKA).<br/></td>
                                    </tr>
                                    <tr>
                                        <td className="ase">Duration</td>
                                        <td className="asey">--</td>
                                    </tr>
                                    <tr>
                                        <td className="ase">Payment mode</td>
                                        <td className="asey">As per joining Instruction</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </p>
                {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> */}
                {/* <script>
                    $('#countries-list').on('change', function() {
                        var country_id = this.value;
                        $.ajax({
                            type: "POST",
                            url: "../get_course1.php",
                            data: 'country_id=' + country_id,
                            success: function(result) {
                                $("#states-list").html(result);
                            }
                        });
                    });
                </script> */}
            </form>
        </div>
    </div>
  )
}

export default CourseOffered