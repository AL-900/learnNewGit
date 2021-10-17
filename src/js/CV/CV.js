import React, {useEffect , useState} from "react";

// DATA START

const text = [
	{
		dtail: `To build up a career in a well-established and environment friendly organization where 
acquired knowledge and expertise can be used effectively and efficiently . Please hire me .`,
	},
	{
		dtail: `A self-driven attitude, willingness to learn and a strong presence of mind.
Optimistic, confident and benevolent. 
Energetic, devoted, sincere and hardworking . `,
	},

];

const educationtableHead = ["Name of Examination", "Group / Subject", "Year of Passing", "Institute", "GPA / CGPA"];
const JSC = ["JSC", "N/A", 2014, "Cantonment Board High School,Ghatail", "3.86"];
const SSC = ["SSC", "Busines Studies", 2017, "Cantonment Board High School,Ghatail", "5.00"];
const HSC = ["HSC", "Humanities ", 2019, "Notre Dame College, Dhaka", "4.41"];
const BSS = ["BSS (Hon’s)", "Economics ", "Running", "Dhaka College , Dhaka", "N/A"];
const languageHead = ["Language", "Listening", "Reading", "Writing", "Speaking"];
const bangla = ["Bengali", "Excellent", "Excellent", "Excellent", "Excellent"];
const english = ["English", "Excellent", "Excellent", "Very Good", "Very Good"];
const computerOne = [1, "Operating system", "Linux (Mint , Ubuntu) ,Windows  10."];
const computerTwo = [2, "Word processing", "LibreOffice Word , Microsoft word"];
const computerThree = [3, "Spread sheet analysis", "LibreOffice Math and Base ,MS Excel, MS Access"];
const computerFour = [4, "Special", "Basic Front-end Website Design With React"];

// DATA END

export default function Curriculum__vitae() {
	return (
		<div>
			<div className='row'>
				<div className='col-md-4 col-sm-4'></div>
				<div className='col-md-4 col-sm-4'>
					<Header bold={true} text='Curriculum vitae' />
					<Header text='of' bold={true} />
					<Header text='Hasan Al Mamun' bold={true} />
					<Header contact='E-mail' text='halmamun900@gmail.com' />
					<Header contact='Phone ' text='+8801770085926' />
				</div>
				<div className='col-md-4 col-sm-4'>
					<img src='/src/img/IMG_20210803_154456.jpg' className='cv_img img-fluid ' alt='' />
				</div>
			</div>
			{/* body */}
			<div className='mt-5'></div>
			<div>
				<Address type='Current Address' pocode='1900' village='Aishora' po='Aishora' upazilla='Basail' district='Tangail' />
				<Address type=' Parmanent Address' pocode='1000' village='Arambag' po='Motijheel' upazilla='Motijheel' district='Dhaka' />
			</div>
			<div>
				<Dtails type='Career Objective' text={text[0].dtail} />
				<Dtails type='Self-Assessment' text={text[1].dtail} />
			</div>
			{/* table education */}
			<div>
				<Dtails type='Academic Qualification' />
				<div className='container'>
					<table className='table'>
						<thead>
							<RowHead tablehead={educationtableHead} />
						</thead>
						<tbody>
							<RowData tabledata={SSC} />
							<RowData tabledata={HSC} />
							<RowData tabledata={BSS} />
						</tbody>
					</table>
				</div>
			</div>

			{/* table language  */}
			<div>
				<Dtails type='Language Proficiency' />
				<div className='container'>
					<table className='table'>
						<thead>
							<RowHead tablehead={languageHead} />
						</thead>
						<tbody>
							<RowData tabledata={bangla} />
							<RowData tabledata={english} />
						</tbody>
					</table>
				</div>
			</div>
			{/* table computer  */}
			<div>
				<Dtails type='Computer Literacy' />
				<div className='container'>
					<table className='table'>
						<tbody>
							<RowData tabledata={computerOne} />
							<RowData tabledata={computerTwo} />
							<RowData tabledata={computerThree} />
							<RowData tabledata={computerFour} />
						</tbody>
					</table>
				</div>
			</div>
			<div>
				<Dtails type='Personal Info' />
				<PersonalInfo type='Name' value='Hasan Al Mamun' />
				<PersonalInfo type="Father's Name" value='Md. Mostofa Kamal' />
				<PersonalInfo type="Mother's Name" value='Aleya Bagum' />
				<PersonalInfo type='Date of Birth' value='19/10/2001' />
				<PersonalInfo type='Height' value='5.8" ' />
				<PersonalInfo type='Blood Group' value='B+ ' />
				<PersonalInfo type='Weight	' value='72 Kg ' />
				<PersonalInfo type='Religion	' value='Islam ' />
				<PersonalInfo type='Marital Status		' value='Unmarried ' />
				<PersonalInfo type='Country' value='Bangladesh ' />
				<PersonalInfo type='Nationality' value='Bangladeshi ' />
				<PersonalInfo tr={true} type='NID' value='5563036135 ' />
			</div>
			<Dtails type='Extra' text={truncate(text[1].dtail, 115)} />

			<div className='mt-5 mb-5'></div>
		</div>
	);
}

function Header({ contact, text, bold = false }) {
	return (
		<div>
			<center>
				{bold ? (
					<h2 className='h2 mt-4 mb-4 ' style={{ fontFamily: "Arial" }}>
						{text}
					</h2>
				) : (
					<h6 className='h6 lighter mt-3'>
						{contact} : {text}
					</h6>
				)}
			</center>
		</div>
	);
}

function Address({ type, village, po, district, pocode, upazilla }) {
	return (
		<div className='container'>
			<h4 className='h3 mt-3 mb-3'>{type} </h4>
			<h6 className='h6 mt-2 mx-4'>Village : {village}</h6>
			<h6 className='h6 mt-2 mx-4'>P.O. : {po}</h6>
			<h6 className='h6 mt-2 mx-4'>Postal Code : {pocode}</h6>
			<h6 className='h6 mt-2 mx-4'> Upazilla : {upazilla}</h6>
			<h6 className='h6 mt-2 mx-4'> District : {district}</h6>
		</div>
	);
}

function Dtails({ type, text }) {
	return (
		<div className='container'>
			<center>
				<h4 className='h4 p-1 dtailsHead  mt-5 mb-5'>{type}</h4>
			</center>
			<div className='h6'>{text}</div>
		</div>
	);
}

function RowHead({ tablehead }) {
	return (
		<tr>
			{tablehead.map((v) => (
				<th key={Math.random()}>{v}</th>
			))}
		</tr>
	);
}

function RowData({ tabledata }) {
	return (
		<tr>
			{tabledata.map((v) => (
				<td key={Math.random()}>{v}</td>
			))}
		</tr>
	);
}

function PersonalInfo({ type, value, tr = false }) {
	return (
		<div className='container'>
			<div className='row '>
				<div className='col-md-4 col-sm-4  '>
					{tr ? (
						<h6 className='h6  ' style={{ color: "red" }}>
							{type}
						</h6>
					) : (
						<h6 className='h6  '>{type}</h6>
					)}
				</div>
				<div className='col-md-4 col-sm-4'>:</div>
				<div className='col-md-4 col-sm-4'>{tr ? <p style={{ color: "red", fontWeight: "bolder" }}>{value}</p> : <p>{value}</p>}</div>
			</div>
		</div>
	);
}


function  truncate(str , n ) {
	return str?.length > n ? str.substr(0, n-1) + "..." : str;
}


export  function Nav() {
	const [black, setnav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 150) {
				setnav(true);
			} else setnav(false);
		});
		return () => {
			window.removeEventListener("scroll", setnav);
		};
	}, []);
	return (
		<div className='Nav'>
			<div className={` mynav ${black && "blacknav"} fixed-top`}>
				<h3>Hasan Al Mamun </h3>
			</div>
		</div>
	);
}

