var templateSource, templateFormulaire;

var positionCounter = 0;
            Handlebars.registerHelper('class', function(){
                        var mainClass = "main";
                        return mainClass+positionCounter++;
            });



Handlebars.registerHelper('urlRegistration', function(){
            var url = Math.random();
            return url;
});


function showTemplate(template, data){
            var html = template(data);
            $(".single-app-page").html(html);
        };


window.location.href.substr(0, window.location.href.indexOf('#')); 

$(document).ready(function(){
                 
                     
            var source   = $("#main").html();
            templateSource = Handlebars.compile(source);
            var data = {
                        todo:[
                                    {
                                    title: "Main menu",
                                    content:[
                                             {action:"", titulo:"Create License", url:"create"},
                                             {titulo:"Show License", url: "show"},
                                             {titulo:"Move License", url: "move"},
                                             {titulo:"Report", url: "report"},
                                            // {titulo:"Admin", url: "admstr"},                                             
                                             ]
                                    }
            
                        ]
            }
            
            var html    = templateSource(data);
            $(".single-app-page").html(html);
////////////////////////////////////////////////////////////////////////////////////
            var fuente   = $("#formulaire").html();
            templateFormulaire = Handlebars.compile(fuente);
            
            var otro = {
                        
                        universal:[
                        {action:"create_license.pl",
                        successAction:"Create",
                        url: "create",
                        nada:[
                                    {
                                    licenceName: "Create licence", 
                                    
                                    group:[
                                                {
                                                name: "Product", id:"product", 
                                                optionValues:[
                                                        {value:0, label: "Select a product ...", selected: "selected", option:"Select a product ... "},
                                                        {value:"Image5", option:"Image 5.x (SLED 12)"},
                                                        {value:"Server2", option:"Server 2.x (SLES 11)"},
                                                        {value:"Server3", option:"Server 3.x (SLES 12)"},
                                                        {value:"Windows7", option:"Windows 7"},                                                 
                                                        {value:"Windows10", option:"Windows 10"},
                                                        ]
                                                },
                                                {
                                                name: "Customer", id:"customer", 
                                                optionValues:[
                                                            {value:0, label: "Select a customer ...", selected: "selected", option:"Select a Customer... "},
                                                            {value:"SIGOS", option:"SIGOS"},
                                                            {value:"Airtel", option:"Airtel"},
                                                            {value:"AT&T", option:"AT&T"},
                                                            {value:"Avea", option:"Avea"} ,           
                                                            {value:"Azercell", option:"Azercell"},        
                                                            {value:"BH-Telecom", option:"BH-Telecom"},      
                                                            {value:"Bouygues", option:"Bouygues"},        
                                                            {value:"Cosmote", option:"Cosmote"},         
                                                            {value:"DBTelematik", option:"DBTelematik" },     
                                                            {value:"DTAG", option:"DTAG"},            
                                                            {value:"Excelcom", option:"Excelcom"},        
                                                            {value:"INWI", option:"INWI"},            
                                                            {value:"Kcell", option:"Kcell"},           
                                                            {value:"Maxis", option:"Maxis" },          
                                                            {value:"Mobicom", option:"Mobicom" },         
                                                            {value:"MTS", option:"MTS"    },        
                                                            {value:"Ncell", option:"Ncell"    },        
                                                            {value:"Oredoo", option:"Oredoo"   },        
                                                            {value:"Optus", option:"Optus"  },         
                                                            {value:"Orange", option:"Orange"},
                                                            {value:"Safaricom", option:"Safaricom"},
                                                            {value:"Swisscom", option:"Swisscom"},
                                                            {value:"Taiwan", option:"Taiwan"   },
                                                            {value:"Telefonica", option:"Telefonica"},
                                                            {value:"Telkomsel", option:"Telkomsel"},
                                                            {value:"Telus", option:"Telus"},
                                                            {value:"T-Home", option:"T-Home"},  
                                                            {value:"T-Mobile", option:"T-Mobile"},
                                                            {value:"Turkcell", option:"Turkcell"},
                                                            {value:"Vodafone", option:"Vodafone"},
                                                            {value:"Vodafone GF", option:"Vodafone GF"},
                                                            {value:"Vodafone VRS", option:"Vodafone VRS"},
                                                            {value:"Viettel", option:"Viettel"},
                                                            {value:"VIPnet", option:"VIPnet"},

                                                        ]
                                                },
                                                {name: "Country", id:"country",
                                                optgroup:[{contintent:"Europe",
                                                optionValues:[
                                                            {value:0, label: "Select a Country ...", selected: "selected", option:"Select a Country ... "},
                                                            {value:"Albania", option:"Albania"},
                                                            {value:"Austria", option:"Austria"},
                                                            {value:"Belarus", option:"Belarus"},
                                                            {value:"Belgium", option:"Belgium"},
                                                            {value:"Bosnia and Herzegovina", option:"Bosnia and Herzegovina"},
                                                            {value:"Bulgaria", option:"Bulgaria"},
                                                            {value:"Croatia", option:"Croatia"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Czech Republic", option:"Czech Republic"},
                                                            {value:"Denmark", option:"Denmark"},
                                                            {value:"Estonia", option:"Estonia"},
                                                            {value:"Finland", option:"Finland"},
                                                            {value:"France", option:"France"},
                                                            {value:"Germany", option:"Germany"},
                                                            {value:"Greece", option:"Greece"},
                                                            {value:"Hungary", option:"Hungary"},
                                                            {value:"Iceland", option:"Iceland"},
                                                            {value:"Ireland", option:"Ireland"},
                                                            {value:"Italy", option:"Italy"},
                                                            {value:"Latvia", option:"Latvia"},
                                                            {value:"Liechtenstein", option:"Liechtenstein"},
                                                            {value:"Lithuania", option:"Lithuania"},
                                                            {value:"Luxembourg", option:"Luxembourg"},
                                                            {value:"Macedonia", option:"Macedonia"},
                                                            {value:"Malta", option:"Malta"},
                                                            {value:"Moldova", option:"Moldova"},
                                                            {value:"Montenegro", option:"Montenegro"},
                                                            {value:"Netherlands", option:"Netherlands"},
                                                            {value:"Norway", option:"Norway"},
                                                            {value:"Poland", option:"Poland"},
                                                            {value:"Portugal", option:"Portugal"},
                                                            {value:"Romania", option:"Romania"},
                                                            {value:"Russia", option:"Russia"},
                                                            {value:"Serbia", option:"Serbia"},
                                                            {value:"Slovakia", option:"Slovakia"},
                                                            {value:"Slovenia", option:"Slovenia"},
                                                            {value:"Spain", option:"Spain"},
                                                            {value:"Sweden", option:"Sweden"},
                                                            {value:"Switzerland", option:"Switzerland"},
                                                            {value:"Ukraine", option:"Ukraine"},
                                                            {value:"United Kingdom", option:"United Kingdom"},                                                 
                                                        ]
                                                },
                                                {contintent:"Africa",
                                                optionValues:[
                                                            {value:"Algeria", option:"Algeria"},
                                                            {value:"Angola", option:"Angola"},
                                                            {value:"Egypt", option:"Egypt"},
                                                            {value:"Kenya", option:"Kenya"},
                                                            {value:"Morocco", option:"Morocco"},
                                                            {value:"South Africa", option:"South Africa"},                          
                                                        ]
                                                },
                                                {contintent:"Asia",
                                                optionValues:[
                                                            {value:"Afghanistan", option:"Afghanistan"},
                                                            {value:"Armenia", option:"Armenia"},
                                                            {value:"Azerbaijan", option:"Azerbaijan"},
                                                            {value:"Bahrain", option:"Bahrain"},
                                                            {value:"Bangladesh", option:"Bangladesh"},
                                                            {value:"Brunei", option:"Brunei"},
                                                            {value:"China", option:"China"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Hong Kong SAR China", option:"Hong Kong SAR China"},
                                                            {value:"India", option:"India"},
                                                            {value:"Indonesia", option:"Indonesia"},
                                                            {value:"Iraq", option:"Iraq"},
                                                            {value:"Israel", option:"Israel"},
                                                            {value:"Japan", option:"Japan"},
                                                            {value:"Jordan", option:"Jordan"},
                                                            {value:"Kazakhstan", option:"Kazakhstan"},
                                                            {value:"Kuwait", option:"Kuwait"},
                                                            {value:"Kyrgyzstan", option:"Kyrgyzstan"},
                                                            {value:"Laos", option:"Laos"},
                                                            {value:"Lebanon", option:"Lebanon"},
                                                            {value:"Malaysia", option:"Malaysia"},
                                                            {value:"Maldives", option:"Maldives"},
                                                            {value:"Mongolia", option:"Mongolia"},
                                                            {value:"Nepal", option:"Nepal"},
                                                            {value:"Oman", option:"Oman"},
                                                            {value:"Pakistan", option:"Pakistan"},
                                                            {value:"Philippines", option:"Philippines"},
                                                            {value:"Qatar", option:"Qatar"},
                                                            {value:"Saudi Arabia", option:"Saudi Arabia"},
                                                            {value:"Singapore", option:"Singapore"},
                                                            {value:"South Korea", option:"South Korea"},
                                                            {value:"Sri Lanka", option:"Sri Lanka"},
                                                            {value:"Taiwan", option:"Taiwan"},
                                                            {value:"Thailand", option:"Thailand"},
                                                            {value:"Turkey", option:"Turkey"},
                                                            {value:"Turkmenistan", option:"Turkmenistan"},
                                                            {value:"United Arab Emirates", option:"United Arab Emirates"},
                                                            {value:"Uzbekistan", option:"Uzbekistan"},
                                                            {value:"Vietnam", option:"Vietnam"},
                                                            {value:"Yemen", option:"Yemen"},                       
                                                        ]
                                                },
                                                {contintent:"Oceania",
                                                optionValues:[
                                                            {value:"Australia", option:"Australia"},
                                                            {value:"Fiji", option:"Fiji"},
                                                            {value:"New Zealand", option:"New Zealand"},
                                                            {value:"Papua New Guinea", option:"Papua New Guinea"},                    
                                                        ]
                                                },                                                
                                                ]
                                                },                                                          
                                                {name: "Subscription", id:"subscription", 
                                                optionValues:[
                                                        {value:0, label: "Select a Subscription ...", selected: "selected", option:"Select a Subscription ... "},
                                                        {value:"Basic", option:"Basic"},
                                                        {value:"Standard", option:"Standard"},
                                                        {value:"Priority", option:"Priority"},
                                                        {value:"Royalty-free", option:"Royalty-free"},                                                 
                                                        ]
                                                },                                                
                                                {name: "SubscriptionDuration", id:"SubscriptionDuration",
                                                optionValues:[
                                                        {value:0, label: "Select duration ...", selected: "selected", option:"Select duration ... "},
                                                        {value:1, option:"1 year"},
                                                        {value:3, option:"3 years"},
                                                        {value:5, option:"5 years"},
                                                        {value:99, option:"non-expiring"},
                                                        ]
                                                }            
                                    ],
                                    selectionList:[
                                                {placeholder:"Year.Month.Day",
                                                name: "StartDate",
                                                type:"text",
                                                ifRequired: "required",
                                                datepicker: "datepicker"},                                                                                               
                                               {name: "Hostname",
                                                type:"text",
                                                ifRequired: "required"
                                                },
                                                {name: "MAC_Address",
                                                type:"text",
                                                ifRequired: "required"                                                
                                                },
                                                {name: "SNR",
                                                type:"text",
                                                ifRequired: "required"                                               
                                                },
                                                {name: "SysUUID",
                                                type:"text",
                                                ifRequired: "required"                                                
                                                }                                                                                              
                                    ]
                                    }                         
            
                        ]
                        },
                        {action:"show.pl",
                        successAction:"Show",
                        url: "show",
                        nada:[
                                    {
                                    licenceName: "Show licence", 
                                    
                                    group:[
                                                {
                                                name: "Customer", id:"customer", 
                                                optionValues:[
                                                            {value:0, label: "Select a customer ...", selected: "selected", option:"Select a Customer... "},
                                                            {value:"SIGOS", option:"SIGOS"},
                                                            {value:"Airtel", option:"Airtel"},
                                                            {value:"AT&T", option:"AT&T"},
                                                            {value:"Avea", option:"Avea"} ,           
                                                            {value:"Azercell", option:"Azercell"},        
                                                            {value:"BH-Telecom", option:"BH-Telecom"},      
                                                            {value:"Bouygues", option:"Bouygues"},        
                                                            {value:"Cosmote", option:"Cosmote"},         
                                                            {value:"DBTelematik", option:"DBTelematik" },     
                                                            {value:"DTAG", option:"DTAG"},            
                                                            {value:"Excelcom", option:"Excelcom"},        
                                                            {value:"INWI", option:"INWI"},            
                                                            {value:"Kcell", option:"Kcell"},           
                                                            {value:"Maxis", option:"Maxis" },          
                                                            {value:"Mobicom", option:"Mobicom" },         
                                                            {value:"MTS", option:"MTS"    },        
                                                            {value:"Ncell", option:"Ncell"    },        
                                                            {value:"Oredoo", option:"Oredoo"   },        
                                                            {value:"Optus", option:"Optus"  },         
                                                            {value:"Orange", option:"Orange"},
                                                            {value:"Safaricom", option:"Safaricom"},
                                                            {value:"Swisscom", option:"Swisscom"},
                                                            {value:"Taiwan", option:"Taiwan"   },
                                                            {value:"Telefonica", option:"Telefonica"},
                                                            {value:"Telkomsel", option:"Telkomsel"},
                                                            {value:"Telus", option:"Telus"},
                                                            {value:"T-Home", option:"T-Home"},  
                                                            {value:"T-Mobile", option:"T-Mobile"},
                                                            {value:"Turkcell", option:"Turkcell"},
                                                            {value:"Vodafone", option:"Vodafone"},
                                                            {value:"Vodafone GF", option:"Vodafone GF"},
                                                            {value:"Vodafone VRS", option:"Vodafone VRS"},
                                                            {value:"Viettel", option:"Viettel"},
                                                            {value:"VIPnet", option:"VIPnet"},

                                                        ]
                                                },
                                                {name: "Country", id:"country",
                                                optgroup:[{contintent:"Europe",
                                                optionValues:[
                                                            {value:0, label: "Select a Country ...", selected: "selected", option:"Select a Country ... "},
                                                            {value:"Albania", option:"Albania"},
                                                            {value:"Austria", option:"Austria"},
                                                            {value:"Belarus", option:"Belarus"},
                                                            {value:"Belgium", option:"Belgium"},
                                                            {value:"Bosnia and Herzegovina", option:"Bosnia and Herzegovina"},
                                                            {value:"Bulgaria", option:"Bulgaria"},
                                                            {value:"Croatia", option:"Croatia"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Czech Republic", option:"Czech Republic"},
                                                            {value:"Denmark", option:"Denmark"},
                                                            {value:"Estonia", option:"Estonia"},
                                                            {value:"Finland", option:"Finland"},
                                                            {value:"France", option:"France"},
                                                            {value:"Germany", option:"Germany"},
                                                            {value:"Greece", option:"Greece"},
                                                            {value:"Hungary", option:"Hungary"},
                                                            {value:"Iceland", option:"Iceland"},
                                                            {value:"Ireland", option:"Ireland"},
                                                            {value:"Italy", option:"Italy"},
                                                            {value:"Latvia", option:"Latvia"},
                                                            {value:"Liechtenstein", option:"Liechtenstein"},
                                                            {value:"Lithuania", option:"Lithuania"},
                                                            {value:"Luxembourg", option:"Luxembourg"},
                                                            {value:"Macedonia", option:"Macedonia"},
                                                            {value:"Malta", option:"Malta"},
                                                            {value:"Moldova", option:"Moldova"},
                                                            {value:"Montenegro", option:"Montenegro"},
                                                            {value:"Netherlands", option:"Netherlands"},
                                                            {value:"Norway", option:"Norway"},
                                                            {value:"Poland", option:"Poland"},
                                                            {value:"Portugal", option:"Portugal"},
                                                            {value:"Romania", option:"Romania"},
                                                            {value:"Russia", option:"Russia"},
                                                            {value:"Serbia", option:"Serbia"},
                                                            {value:"Slovakia", option:"Slovakia"},
                                                            {value:"Slovenia", option:"Slovenia"},
                                                            {value:"Spain", option:"Spain"},
                                                            {value:"Sweden", option:"Sweden"},
                                                            {value:"Switzerland", option:"Switzerland"},
                                                            {value:"Ukraine", option:"Ukraine"},
                                                            {value:"United Kingdom", option:"United Kingdom"},                                                 
                                                        ]
                                                },
                                                {contintent:"Africa",
                                                optionValues:[
                                                            {value:"Algeria", option:"Algeria"},
                                                            {value:"Angola", option:"Angola"},
                                                            {value:"Egypt", option:"Egypt"},
                                                            {value:"Kenya", option:"Kenya"},
                                                            {value:"Morocco", option:"Morocco"},
                                                            {value:"South Africa", option:"South Africa"},                          
                                                        ]
                                                },
                                                {contintent:"Asia",
                                                optionValues:[
                                                            {value:"Afghanistan", option:"Afghanistan"},
                                                            {value:"Armenia", option:"Armenia"},
                                                            {value:"Azerbaijan", option:"Azerbaijan"},
                                                            {value:"Bahrain", option:"Bahrain"},
                                                            {value:"Bangladesh", option:"Bangladesh"},
                                                            {value:"Brunei", option:"Brunei"},
                                                            {value:"China", option:"China"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Hong Kong SAR China", option:"Hong Kong SAR China"},
                                                            {value:"India", option:"India"},
                                                            {value:"Indonesia", option:"Indonesia"},
                                                            {value:"Iraq", option:"Iraq"},
                                                            {value:"Israel", option:"Israel"},
                                                            {value:"Japan", option:"Japan"},
                                                            {value:"Jordan", option:"Jordan"},
                                                            {value:"Kazakhstan", option:"Kazakhstan"},
                                                            {value:"Kuwait", option:"Kuwait"},
                                                            {value:"Kyrgyzstan", option:"Kyrgyzstan"},
                                                            {value:"Laos", option:"Laos"},
                                                            {value:"Lebanon", option:"Lebanon"},
                                                            {value:"Malaysia", option:"Malaysia"},
                                                            {value:"Maldives", option:"Maldives"},
                                                            {value:"Mongolia", option:"Mongolia"},
                                                            {value:"Nepal", option:"Nepal"},
                                                            {value:"Oman", option:"Oman"},
                                                            {value:"Pakistan", option:"Pakistan"},
                                                            {value:"Philippines", option:"Philippines"},
                                                            {value:"Qatar", option:"Qatar"},
                                                            {value:"Saudi Arabia", option:"Saudi Arabia"},
                                                            {value:"Singapore", option:"Singapore"},
                                                            {value:"South Korea", option:"South Korea"},
                                                            {value:"Sri Lanka", option:"Sri Lanka"},
                                                            {value:"Taiwan", option:"Taiwan"},
                                                            {value:"Thailand", option:"Thailand"},
                                                            {value:"Turkey", option:"Turkey"},
                                                            {value:"Turkmenistan", option:"Turkmenistan"},
                                                            {value:"United Arab Emirates", option:"United Arab Emirates"},
                                                            {value:"Uzbekistan", option:"Uzbekistan"},
                                                            {value:"Vietnam", option:"Vietnam"},
                                                            {value:"Yemen", option:"Yemen"},                       
                                                        ]
                                                },
                                                {contintent:"Oceania",
                                                optionValues:[
                                                            {value:"Australia", option:"Australia"},
                                                            {value:"Fiji", option:"Fiji"},
                                                            {value:"New Zealand", option:"New Zealand"},
                                                            {value:"Papua New Guinea", option:"Papua New Guinea"},                    
                                                        ]
                                                },                                                
                                                ]
                                                },                                                
                                                {name: "SubscriptionDuration", id:"SubscriptionDuration",
                                                optionValues:[
                                                        {value:0, label: "Select duration ...", selected: "selected", option:"Select duration ... "},
                                                        {value:1, option:"1 year"},
                                                        {value:3, option:"3 years"},
                                                        {value:5, option:"5 years"},
                                                        {value:99, option:"non-expiring"}
                                                        ]
                                                }           
                                    ],
                                    selectionList:[
                                                {name: "Hostname",
                                                type:"text",
                                                ifRequired: "required"                                               
                                                },
                                                {name: "MAC Address",
                                                type:"text"
                                                },
                                                {name: "SNR",
                                                type:"text"
                                                }                                                 
                                    ]
                                    }                         
            
                        ]
                        },
                        {action:"search_pre_move.pl",
                        url: "move",
                        successAction:"Move",
                        nada:[
                                    {
                                    licenceName: "Move licence",
                                    selectionList:[
                                               {name: "Hostname",
                                                type:"text"
                                                },
                                                {name: "License Key",
                                                type:"text"
                                                }                                              
                                    ]
                                    }                         
            
                        ]
                        },
                        {action:"report.pl",
                        url: "report",
                        successAction:"Generate Report",
                        nada:[
                                    {
                                    licenceName: "Report licence",
                                    group:[
                                                {
                                                name: "Customer", id:"customer", 
                                                optionValues:[
                                                            {value:0, label: "Select a customer ...", selected: "selected", option:"Select a Customer... "},
                                                            {value:"Airtel", option:"Airtel"},
                                                            {value:"AT&T", option:"AT&T"},
                                                            {value:"Avea", option:"Avea"} ,           
                                                            {value:"Azercell", option:"Azercell"},        
                                                            {value:"BH-Telecom", option:"BH-Telecom"},      
                                                            {value:"Bouygues", option:"Bouygues"},        
                                                            {value:"Cosmote", option:"Cosmote"},         
                                                            {value:"DBTelematik", option:"DBTelematik" },     
                                                            {value:"DTAG", option:"DTAG"},            
                                                            {value:"Excelcom", option:"Excelcom"},        
                                                            {value:"INWI", option:"INWI"},            
                                                            {value:"Kcell", option:"Kcell"},           
                                                            {value:"Maxis", option:"Maxis" },          
                                                            {value:"Mobicom", option:"Mobicom" },         
                                                            {value:"MTS", option:"MTS"    },        
                                                            {value:"Ncell", option:"Ncell"    },        
                                                            {value:"Oredoo", option:"Oredoo"   },        
                                                            {value:"Optus", option:"Optus"  },         
                                                            {value:"Orange", option:"Orange"},
                                                            {value:"Safaricom", option:"Safaricom"},
                                                            {value:"Swisscom", option:"Swisscom"},
                                                            {value:"Taiwan", option:"Taiwan"   },
                                                            {value:"Telefonica", option:"Telefonica"},
                                                            {value:"Telkomsel", option:"Telkomsel"},
                                                            {value:"Telus", option:"Telus"},
                                                            {value:"T-Home", option:"T-Home"},  
                                                            {value:"T-Mobile", option:"T-Mobile"},
                                                            {value:"Turkcell", option:"Turkcell"},
                                                            {value:"Vodafone", option:"Vodafone"},
                                                            {value:"Vodafone GF", option:"Vodafone GF"},
                                                            {value:"Vodafone VRS", option:"Vodafone VRS"},
                                                            {value:"Viettel", option:"Viettel"},
                                                            {value:"VIPnet", option:"VIPnet"}
                                                        ]
                                                },
                                                {name: "Country", id:"country",
                                                optgroup:[{contintent:"Europe",
                                                optionValues:[
                                                            {value:0, label: "Select a Country ...", selected: "selected", option:"Select a Country ... "},
                                                            {value:"Albania", option:"Albania"},
                                                            {value:"Austria", option:"Austria"},
                                                            {value:"Belarus", option:"Belarus"},
                                                            {value:"Belgium", option:"Belgium"},
                                                            {value:"Bosnia and Herzegovina", option:"Bosnia and Herzegovina"},
                                                            {value:"Bulgaria", option:"Bulgaria"},
                                                            {value:"Croatia", option:"Croatia"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Czech Republic", option:"Czech Republic"},
                                                            {value:"Denmark", option:"Denmark"},
                                                            {value:"Estonia", option:"Estonia"},
                                                            {value:"Finland", option:"Finland"},
                                                            {value:"France", option:"France"},
                                                            {value:"Germany", option:"Germany"},
                                                            {value:"Greece", option:"Greece"},
                                                            {value:"Hungary", option:"Hungary"},
                                                            {value:"Iceland", option:"Iceland"},
                                                            {value:"Ireland", option:"Ireland"},
                                                            {value:"Italy", option:"Italy"},
                                                            {value:"Latvia", option:"Latvia"},
                                                            {value:"Liechtenstein", option:"Liechtenstein"},
                                                            {value:"Lithuania", option:"Lithuania"},
                                                            {value:"Luxembourg", option:"Luxembourg"},
                                                            {value:"Macedonia", option:"Macedonia"},
                                                            {value:"Malta", option:"Malta"},
                                                            {value:"Moldova", option:"Moldova"},
                                                            {value:"Montenegro", option:"Montenegro"},
                                                            {value:"Netherlands", option:"Netherlands"},
                                                            {value:"Norway", option:"Norway"},
                                                            {value:"Poland", option:"Poland"},
                                                            {value:"Portugal", option:"Portugal"},
                                                            {value:"Romania", option:"Romania"},
                                                            {value:"Russia", option:"Russia"},
                                                            {value:"Serbia", option:"Serbia"},
                                                            {value:"Slovakia", option:"Slovakia"},
                                                            {value:"Slovenia", option:"Slovenia"},
                                                            {value:"Spain", option:"Spain"},
                                                            {value:"Sweden", option:"Sweden"},
                                                            {value:"Switzerland", option:"Switzerland"},
                                                            {value:"Ukraine", option:"Ukraine"},
                                                            {value:"United Kingdom", option:"United Kingdom"}                                                 
                                                        ]
                                                },
                                                {contintent:"Africa",
                                                optionValues:[
                                                            {value:"Algeria", option:"Algeria"},
                                                            {value:"Angola", option:"Angola"},
                                                            {value:"Egypt", option:"Egypt"},
                                                            {value:"Kenya", option:"Kenya"},
                                                            {value:"Morocco", option:"Morocco"},
                                                            {value:"South Africa", option:"South Africa"}                          
                                                        ]
                                                },
                                                {contintent:"Asia",
                                                optionValues:[
                                                            {value:"Afghanistan", option:"Afghanistan"},
                                                            {value:"Armenia", option:"Armenia"},
                                                            {value:"Azerbaijan", option:"Azerbaijan"},
                                                            {value:"Bahrain", option:"Bahrain"},
                                                            {value:"Bangladesh", option:"Bangladesh"},
                                                            {value:"Brunei", option:"Brunei"},
                                                            {value:"China", option:"China"},
                                                            {value:"Cyprus", option:"Cyprus"},
                                                            {value:"Hong Kong SAR China", option:"Hong Kong SAR China"},
                                                            {value:"India", option:"India"},
                                                            {value:"Indonesia", option:"Indonesia"},
                                                            {value:"Iraq", option:"Iraq"},
                                                            {value:"Israel", option:"Israel"},
                                                            {value:"Japan", option:"Japan"},
                                                            {value:"Jordan", option:"Jordan"},
                                                            {value:"Kazakhstan", option:"Kazakhstan"},
                                                            {value:"Kuwait", option:"Kuwait"},
                                                            {value:"Kyrgyzstan", option:"Kyrgyzstan"},
                                                            {value:"Laos", option:"Laos"},
                                                            {value:"Lebanon", option:"Lebanon"},
                                                            {value:"Malaysia", option:"Malaysia"},
                                                            {value:"Maldives", option:"Maldives"},
                                                            {value:"Mongolia", option:"Mongolia"},
                                                            {value:"Nepal", option:"Nepal"},
                                                            {value:"Oman", option:"Oman"},
                                                            {value:"Pakistan", option:"Pakistan"},
                                                            {value:"Philippines", option:"Philippines"},
                                                            {value:"Qatar", option:"Qatar"},
                                                            {value:"Saudi Arabia", option:"Saudi Arabia"},
                                                            {value:"Singapore", option:"Singapore"},
                                                            {value:"South Korea", option:"South Korea"},
                                                            {value:"Sri Lanka", option:"Sri Lanka"},
                                                            {value:"Taiwan", option:"Taiwan"},
                                                            {value:"Thailand", option:"Thailand"},
                                                            {value:"Turkey", option:"Turkey"},
                                                            {value:"Turkmenistan", option:"Turkmenistan"},
                                                            {value:"United Arab Emirates", option:"United Arab Emirates"},
                                                            {value:"Uzbekistan", option:"Uzbekistan"},
                                                            {value:"Vietnam", option:"Vietnam"},
                                                            {value:"Yemen", option:"Yemen"}                      
                                                        ]
                                                },
                                                {contintent:"Oceania",
                                                optionValues:[
                                                            {value:"Australia", option:"Australia"},
                                                            {value:"Fiji", option:"Fiji"},
                                                            {value:"New Zealand", option:"New Zealand"},
                                                            {value:"Papua New Guinea", option:"Papua New Guinea"}                   
                                                            ]
                                                }                                              
                                                ]
                                                }          
                                                ],                                                
                                    selectionList:[
                                               {placeholder:"Year.Month.Day",
                                                name: "StartDate",
                                                type:"text",
                                                datepicker: "datepicker",
                                                ifRequired: "required"
                                                 },
                                               {placeholder:"Year.Month.Day",
                                                name: "EndDate",
                                                type:"text",
                                                datepicker: "datepicker" 
                                                 }                                               
                                                ]
                                    }                         
                        ]
                        },
                        {action:"suse_report.pl",
                        successAction:"Create",
                        url: "sus",
                        nada:[
                                    {
                                    licenceName: "Suse Report licence",
                                    description: "Create a quarter based report for all Suse products. This report returns a list of new licenses created in the selected quarter.",
                                    
                                    group:[
                                                {
                                                name: "Year", id:"year", 
                                                optionValues:[
                                                            {value:"2016", selected:"selected", option:"2016"},
                                                            {value:"2017", option:"2017"},
                                                            {value:"2018", option:"2018"},
                                                            {value:"2019", option:"2019"},
                                                            {value:"2020", option:"2020"}
                                                        ]
                                                },
                                                {name: "Quarter", id:"quarter", 
                                                optionValues:[
                                                            {value:"Q1", selected:"selected", option:"Q1"},
                                                            {value:"Q2", option:"Q2"},
                                                            {value:"Q3", option:"Q3"},
                                                            {value:"Q4", option:"Q4"}                                              
                                                        ]
                                                }                                               
                                    ]
                                    }                         
            
                        ]
                        },  
                        {action:"search_pre_delete.pl",
                        url: "delete",
                        successAction:"Delete",
                        nada:[
                                    {
                                    licenceName: "Delete License",
                                    selectionList:[
                                               {name: "Hostname",
                                                type:"text",
                                                ifRequired: "required"
                                                },
                                                {name: "MAC_Address",
                                                type:"text"
                                                },
                                                {name: "SNR",
                                                type:"text",
                                                ifRequired: "required"
                                                },
                                                {name: "SysUUID",
                                                type:"text"
                                                }                                     
                                    ]
                                    }                         
            
                        ]
                        }                     
                        ]
            };
            
            var html = templateFormulaire(otro);
            $(".single-app").html(html);

 ////////////////////////////////////////////////////////////////////////////////////                       
            var adminSource   = $("#admin").html();
            templateSource = Handlebars.compile(adminSource);
            var content = {
                        subContent:[
                                    {
                                    title: "Admin",
                                    url:"admstr",
                                    subSubContent:[
                                             {action:"show_customer.pl", ThisTitle:"Show Customers", url: "", type:"submit"},
                                             {action:"",ThisTitle:"Suse Report", url:"sus", type:"button"},
                                             {action:"",ThisTitle:"Delete License", url:"delete", type:"button"},                                            
                                             ]
                                    },
            
                        ]
            }
            
            var html    = templateSource(content);
            $(".single-app-page-admin").html(html);
////////////////////////////////////////////////////////////////////////////////////
            
            $('.single-app').children().hide();
            $('.single-app-page-admin').children().hide();
            
            var stateObj = { id: "file" };
            // response.headers['Vary'] = 'Accept';
            
            $('#create').click(function(){
                        $("#create_licence").show();
                        $('.single-app-page').children().hide();
                        $('.single-app-page-admin').children().hide();
                        history.pushState(stateObj, "page 2", "create.html");
            });
            
            
            $('#show').click(function(){
                        $("#show_licence").show();
                        $('.single-app-page').children().hide();
                        $('.single-app-page-admin').children().hide();                        
                        history.pushState(stateObj, "page 3", "show.html");                       
            });

            $('#move').click(function(){
                        $("#move_licence").show();
                        $('.single-app-page').children().hide();
                        $('.single-app-page-admin').children().hide();
                        history.pushState(stateObj, "page 4", "move.html");                           
            });             

            $('#report').click(function(){
                        $("#report_licence").show();
                        $('.single-app-page').children().hide();
                        //$('.single-app-page-admin').hide();
                        history.pushState(stateObj, "page 5", "report.html"); 
            });
            
            $('#admstr').click(function(){
                        $('.single-app-page-admin').children().show();                        
                        $('.single-app').children().hide();
                        $('.single-app-page').children().hide();
                        history.replaceState(stateObj, "page 6", "admin.html");                              
            });    
  
            $('#sus').click(function(){
                        $("#sus_licence").show();
                        $('.single-app-page').children().hide();
                        $('.single-app-page-admin').children().hide();                                                
                        history.pushState(stateObj, "page 7", "suse.html");                         
            });
            
            $('#delete').click(function(){ 
                        //$('.single-app').children('#suse_licence').show;
                        
                        $("#delete_licence").show();
                        $('.single-app-page').children().hide();
                        $('.single-app-page-admin').children().hide();
                        history.pushState(stateObj, "page 8", "delete.html");                          
            }); 
          
          
//////////////////////////////////////////////////////////////////////////////////// 
$( ".datepicker" ).datepicker({ dateFormat: 'yy.mm.dd' }).val();
/////////////////////////////////////////Date
            

});
