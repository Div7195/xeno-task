import PeopleIcon from '@mui/icons-material/People';
import CampaignIcon from '@mui/icons-material/Campaign';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Sidebar = () => {
    const navigate = useNavigate()
    const [customerButton, setCustomersActive] = useState(false)
    const [audienceButton, setAudiencesActive] = useState(false)
    const [campaignsButton, setCampaignsActive] = useState(false)
    const [ordersButton, setOrdersActive] = useState(false)

    return(
        <>
        <div style={{
            width:'15%',
            height:'100%',
            background:'black',
            display:'flex',
            flexDirection:'column',
        }}> 

        {
            window.location.pathname == '/customers' === true?
            <div style={{
                display:'flex',
                flexDirection:'row',
                paddingLeft:'8%',
                alignItems:'center',
                width:'100%',
                marginTop:'3%',
                borderBottom:'2px solid #584d4d',
                cursor:'pointer',
                background:'#143756'
                
            }}
            onClick={() => {navigate('/customers'); setCustomersActive(true)}}
            >
                <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                    <PeopleIcon/>
                </div>

                <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%', color:'white', fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                    Customers
                </div>
            </div>

            :
            <div style={{
                display:'flex',
                flexDirection:'row',
                paddingLeft:'8%',
                alignItems:'center',
                width:'100%',
                marginTop:'3%',
                borderBottom:'2px solid #584d4d',
                cursor:'pointer',
                
            }}
            onClick={() => {navigate('/customers'); setCustomersActive(true)}}
            >
                <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                    <PeopleIcon/>
                </div>

                <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%', color:'white', fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                    Customers
                </div>
            </div>
        }
            
            {
                window.location.pathname.includes('/orders') === true?
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer',
                    background:'#143756'
                }}
                onClick={() => {navigate('/orders'); setOrdersActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <FormatListBulletedIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%', color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Orders
                    </div>
                </div>
                :
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer'
                    
                }}
                onClick={() => {navigate('/orders'); setOrdersActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <FormatListBulletedIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%', color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Orders
                    </div>
                </div>
            }
            
            {
                window.location.pathname.includes('/audiences') === true?
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer',
                    background:'#143756'
                }}
                onClick={() => {navigate('/audiences'); setAudiencesActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <PeopleIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%',  color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Audiences
                    </div>
                </div>
                :
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer',
                    
                }}
                onClick={() => {navigate('/audiences'); setAudiencesActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <PeopleIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%',  color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Audiences
                    </div>
                </div>
            }
            
            {
                window.location.pathname.includes('/campaigns') === true?
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer',
                    background:'#143756'
                }}
                onClick={() => {navigate('/campaigns'); setCampaignsActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <CampaignIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer', marginLeft:'20%', color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Campaigns
                    </div>
                </div>
                :
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    paddingLeft:'8%',
                    alignItems:'center',
                    width:'100%',
                    marginTop:'3%',
                    borderBottom:'2px solid #584d4d',
                    cursor:'pointer'
                }}
                onClick={() => {navigate('/campaigns'); setCampaignsActive(true)}}
                >
                    <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                        <CampaignIcon/>
                    </div>
    
                    <div style={{fontSize:'20px', cursor : 'pointer', marginLeft:'20%', color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                        Campaigns
                    </div>
                </div>
            }
            

            <div style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                paddingLeft:'8%',
                width:'100%',
                marginTop:'3%',
                borderBottom:'2px solid #584d4d',
                cursor:'pointer'
            }}
            onClick={() => {window.open("http://localhost:8000/auth/logout", "_self");}}
            >
                <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                    <LogoutIcon/>
                </div>

                <div style={{fontSize:'20px', cursor : 'pointer',marginLeft:'20%',  color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}} >
                    Logout
                </div>
            </div>

            {/* <div style={{
                display:'flex',
                flexDirection:'row',
                paddingLeft:'8%',
                alignItems:'center',
                width:'100%',
                marginTop:'3%',
                borderBottom:'2px solid #584d4d'
            }}>
                <div style={{ color: '#00ecff' ,fontSize:'25px', cursor : 'pointer'}}>
                    <PeopleIcon/>
                </div>

                <div style={{fontSize:'20px', cursor : 'pointer', marginLeft:'20%', color:'white',fontFamily:'Roboto, Helvetica, Arial, sans-serif'}}>
                    Audiences
                </div>
            </div> */}
        </div>
        </>
    )
}
export default Sidebar