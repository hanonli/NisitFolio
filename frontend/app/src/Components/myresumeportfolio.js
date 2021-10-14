import React from 'react';
import MyResumeportfoliolayoutP from './Myresume_choiceforportfolio';

class MyresumePortfolio extends React.Component {
    render() {
        const monthdict = {
            1: "มกราคม",
            2: "กุมภาพันธ์",
            3: "มีนาคม",
            4: "เมษายน",
            5: "พฤษภาคม",
            6: "มิถุนายน",
            7: "กรกฎาคม",
            8: "สิงหาคม",
            9: "กันยายน",
            10: "ตุลาคม",
            11: "พฤศจิกายน",
            12: "ธันวาคม",
            99: "ยังอยู่ในงาน"
        };
        const portfolios = [
            {
                _id: "615ac3f2a7acb0008091f7f1",
                UserId: "6142fd75f8b2b96640bc542d",
                Port_Name: "โปรโตไทป์-3244",
                Port_Info: "โปรโตไทป์ โปรโตไทป์ โปรโตไทป์ โปรโตไทป์",
                Owner: "ไก่จิก เด็กตาย",
                totalBookmark: 2,
                Port_Tag: [
                    "ช่างยนต์",
                    "เจ้าหน้าที่ฝ่าย IT"
                ],
                Port_Privacy: "Members",
                Port_Date: "02/10/2021",
                portfolioPictures: [
                    {
                        create_time: "4 ตุลาคม 2564 16:05",
                        last_modified: [
                            "4 ตุลาคม 2564 16:05",
                            "4 ตุลาคม 2564 16:14",
                            "4 ตุลาคม 2564 16:14",
                            "4 ตุลาคม 2564 16:16",
                            "4 ตุลาคม 2564 16:18",
                            "4 ตุลาคม 2564 16:18",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:19",
                            "4 ตุลาคม 2564 16:20",
                            "4 ตุลาคม 2564 16:27",
                            "4 ตุลาคม 2564 16:27",
                            "4 ตุลาคม 2564 16:53",
                            "4 ตุลาคม 2564 16:54",
                            "4 ตุลาคม 2564 16:54",
                            "4 ตุลาคม 2564 17:00"
                        ],
                        PortId: "615ac3f2a7acb0008091f7f1",
                        Pic: [
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_ad196d56-2b35-45d6-b176-3472c6a8fbaf.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_74e5cebd-407e-4af8-a80d-38cd476bf2d3.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_999b3e11-cf81-46ed-a2b6-e16a147928ab.png",
                            "https://nisitfolio.s3.amazonaws.com/images/61508ce5f3a324659c4de1c2_68b21541-ac5f-4416-bd59-5406e88c158d.png"
                        ],
                        Description: [],
                        id: "615ad0bea7acb0008091f9bf"
                    }
                ],
                create_time: "4 ตุลาคม 2564 16:05",
                last_modified: [
                    "4 ตุลาคม 2564 16:05"
                ],
                modified_by: [
                    "::1"
                ],
                ResumeId: [],
                __v: 15
            }
        ];
        let clean_data = [];
        let day;
        for(var i=0; i<portfolios.length; i++){
            day = portfolios[i].Port_Date.split("/");

            clean_data.push({
                link: ("portinfo/" + portfolios[i]._id),
                port_name: portfolios[i].Port_Name,
                image: portfolios[i].portfolioPictures[0].Pic[0],
                date: day[0] + " "+ monthdict[day[1]] + " " + day[2],
                privacy: portfolios[i].Port_Privacy
            });
        }
        console.log(clean_data);
        
        let portcontent = [];
        for(var i=0; i<clean_data.length; i++){
            portcontent.push(<div>
                <h1>{clean_data[i].port_name}</h1>
                <p>{clean_data[i].date}</p>
            </div>);
        }

        return(
            <div>
                <MyResumeportfoliolayoutP>
                    {portcontent}
                </MyResumeportfoliolayoutP>
            </div>
            
        );
    }
}
export default MyresumePortfolio;