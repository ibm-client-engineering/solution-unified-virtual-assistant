"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[796],{5078:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var n=s(5893),i=s(1151);const a={title:"Assistant Custom Extension",sidebar_position:1,description:"How to setup a bot-to-bot integration with another watsonx assistant",custom_edit_url:null},o="watsonx Assistant Subordinate Bot",r={id:"Create/Subordinate Bots/assistant_custom_extension",title:"Assistant Custom Extension",description:"How to setup a bot-to-bot integration with another watsonx assistant",source:"@site/docs/04-Create/05-Subordinate Bots/01-assistant_custom_extension.mdx",sourceDirName:"04-Create/05-Subordinate Bots",slug:"/Create/Subordinate Bots/assistant_custom_extension",permalink:"/solution-unified-virtual-assistant/Create/Subordinate Bots/assistant_custom_extension",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Assistant Custom Extension",sidebar_position:1,description:"How to setup a bot-to-bot integration with another watsonx assistant",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Genesys",permalink:"/solution-unified-virtual-assistant/Create/Third Party Apps/Genesys"},next:{title:"watsonx Orchestrate Skill Flow",permalink:"/solution-unified-virtual-assistant/Create/Subordinate Bots/watsonx_orchestrate"}},l={},h=[{value:"Assistant Custom Extension",id:"assistant-custom-extension",level:2},{value:"Generate API Key",id:"generate-api-key",level:3},{value:"Identify OpenAPI spec values",id:"identify-openapi-spec-values",level:3},{value:"Create the Custom Extension",id:"create-the-custom-extension",level:3},{value:"Action Integration",id:"action-integration",level:3},{value:"<strong>Create a session id</strong>",id:"create-a-session-id",level:4},{value:"<strong>Make a dialog request</strong>",id:"make-a-dialog-request",level:4},{value:"<strong>A note about session variables</strong>",id:"a-note-about-session-variables",level:4},{value:"watsonx Orchestrate Skill",id:"watsonx-orchestrate-skill",level:2},{value:"Changes made",id:"changes-made",level:3},{value:"Setup",id:"setup",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"watsonx-assistant-subordinate-bot",children:"watsonx Assistant Subordinate Bot"}),"\n",(0,n.jsx)(t.p,{children:"This section will describe how we were able to query one watsonx assistant from another using the watsonx assistant API. In addition, this guide will also include information about how to update session variables on the subordinate bot from the calling bot.\nThere are two different ways to integrate with a subordinate watsonx assisant bot:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#assistant-custom-extension",children:"Assistant Custom Extension"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#watsonx-orchestrate-skill",children:"Watsonx Orchestrate Skill"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"assistant-custom-extension",children:"Assistant Custom Extension"}),"\n",(0,n.jsx)("div",{style:{borderBottom:"1px solid #000",marginTop:"20px",marginBottom:"20px"}}),"\n",(0,n.jsx)(t.h3,{id:"generate-api-key",children:"Generate API Key"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to the subordinate bot instance"}),"\n",(0,n.jsx)(t.li,{children:'In the sidebar, navigate to "Assistant Settings"'}),"\n",(0,n.jsx)(t.li,{children:'Under "Assistant IDs and API details", select "Generate API key" and save it for later'}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"identify-openapi-spec-values",children:"Identify OpenAPI spec values"}),"\n",(0,n.jsx)(t.p,{children:"Two values will be needed to connect to a subordinate Assistant:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"service instance url"}),"\n",(0,n.jsx)(t.li,{children:"environmentID"}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Within the Assistant Builder\'s sidebar, navigate to the "Assistant Settings"'}),"\n",(0,n.jsx)(t.li,{children:'Under "Assistant IDs and API details", select "View details"'}),"\n",(0,n.jsxs)(t.li,{children:["Save/copy the values for:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"service instance URL"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Draft/Live Environment ID"})," (whichever is applicable)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"create-the-custom-extension",children:"Create the Custom Extension"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Navigate and download the OpenAPI spec for another assistant bot ",(0,n.jsx)(t.a,{href:"https://github.ibm.com/ibm-client-engineering/solution-watsonx-orchestrate/tree/main/assets/openAPI_specs/otherBot",children:"here"})]}),"\n",(0,n.jsxs)(t.li,{children:["Modify the server url at line 10 with the ",(0,n.jsx)(t.code,{children:"service instance url"})," from step 3 ",(0,n.jsx)(t.a,{href:"#identify-openapi-spec-values",children:"here"})]}),"\n",(0,n.jsx)(t.li,{children:"Navigate to the integrations section within the Assistant Builder sidebar"}),"\n",(0,n.jsx)(t.li,{children:'Select "Build custom extension" and name the extension'}),"\n",(0,n.jsx)(t.li,{children:'Upload the OpenApi spec from step 1 and press "Finish"'}),"\n",(0,n.jsx)(t.li,{children:'Select "Add+" within the newly configured extension'}),"\n",(0,n.jsxs)(t.li,{children:['Select "Next" and update values:',"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Authentication type: Basic auth"}),"\n",(0,n.jsx)(t.li,{children:"Username: apikey"}),"\n",(0,n.jsxs)(t.li,{children:["Password: Password from ",(0,n.jsx)(t.a,{href:"#create-an-ibm-cloud-api-key",children:"here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"action-integration",children:"Action Integration"}),"\n",(0,n.jsx)(t.p,{children:"Two api calls are needed to successfully integrate this extension:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#create-a-session-id",children:"Create a session id for the subordinate bot"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#make-a-dialog-request",children:"Make a dialog request to the subordinate bot"})}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"create-a-session-id",children:(0,n.jsx)(t.strong,{children:"Create a session id"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Within the appropriate action, create a step and under "And then" select "Use an extension"'}),"\n",(0,n.jsxs)(t.li,{children:["Select the appropriate subordinate bot extension made ",(0,n.jsx)(t.a,{href:"#assistant-custom-extension",children:"here"})]}),"\n",(0,n.jsx)(t.li,{children:'Select the Operation as "Create Session"'}),"\n",(0,n.jsxs)(t.li,{children:["Set the Parameters to:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"environment_id"}),": Environment ID from step 3 of ",(0,n.jsx)(t.a,{href:"#identify-openapi-spec-values",children:"Identify OpenAPI spec values"})]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Make sure the \"environment_id\" variable type is 'text'"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"make-a-dialog-request",children:(0,n.jsx)(t.strong,{children:"Make a dialog request"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Create a new step after the action with the "create a session" extension'}),"\n",(0,n.jsx)(t.li,{children:'Under the "And then" Section, select "Use an extension"'}),"\n",(0,n.jsxs)(t.li,{children:["Select the appropriate subordinate bot extension made ",(0,n.jsx)(t.a,{href:"#assistant-custom-extension",children:"here"})]}),"\n",(0,n.jsx)(t.li,{children:'Select the Operation as "Make dialog request"'}),"\n",(0,n.jsxs)(t.li,{children:["Set the Parameters to:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"input.text"}),": input.text"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"input.message_type"}),": text"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"useContext.skills.actions skill.skill_variables"})," : ",(0,n.jsx)(t.code,{children:'{"DEFINED_VARIABLE" : "VARIABLE_VALUE"}'})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"session_id"}),': [session_id from previous step w/ "Create Session" call]']}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"environment_id"}),": Environment ID from step 3 of ",(0,n.jsx)(t.a,{href:"#identify-openapi-spec-values",children:"Identify OpenAPI spec values"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"a-note-about-session-variables",children:(0,n.jsx)(t.strong,{children:"A note about session variables"})}),"\n",(0,n.jsx)(t.p,{children:"Session variables are an important tool for storing information within and between watsonx assistant actions. They are defined either by the user or by the assistant, and each session has a unique instance of each session variable."}),"\n",(0,n.jsxs)(t.p,{children:["If you need to pass more information than just the input query to the subordinate bot, a session variable is the way to go. To do this, the session variable must already be defined on the subordinate side before its value can be updated by a dialog request. Once the variable is defined, it can be updated by including its name along with a new value in a json object under the ",(0,n.jsx)(t.strong,{children:"useContext.skills.actions skill.skill_variables"})," field."]}),"\n",(0,n.jsx)(t.h2,{id:"watsonx-orchestrate-skill",children:"watsonx Orchestrate Skill"}),"\n",(0,n.jsx)("div",{style:{borderBottom:"1px solid #000",marginTop:"20px",marginBottom:"20px"}}),"\n",(0,n.jsxs)(t.p,{children:["This section will cover how the bot-bot communication OpenAPI spec was adapted for use by watsonx orchestrate. The example file can be found ",(0,n.jsx)(t.a,{href:"https://github.ibm.com/ibm-client-engineering/solution-watsonx-orchestrate/tree/main/assets/openAPI_specs/otherBot/wxo_otherBot_v2_OAS.yaml",children:"here"}),". The setup instructions for the specification itself are the same as for the watsonx assistant spec."]}),"\n",(0,n.jsx)(t.h3,{id:"changes-made",children:"Changes made"}),"\n",(0,n.jsx)(t.p,{children:"Of the significant changes made to the specification, there was one functional change and one more cosmetic change."}),"\n",(0,n.jsx)(t.p,{children:'The functional change was to specify in the specification the session variable that will be changed by the watsonx orchestrate skill. For whatever reason, watsonx orchestrate cannot take arbitrary expressions such as a json object as inputs. As a workaround, the session variables must be explicity defined in the specification. Because I was feeling whimsical when I made this, the example session variable is named "jellybelly".'}),"\n",(0,n.jsx)(t.p,{children:"The other change was to give all of the inputs default values in order to be able to hide the input forms that would otherwise appear in the watsonx orchestrate chat. This will not, however, allow you to hide the forms when the skill is imported into watsonx assistant. Unfortunately, those forms cannot be hidden."}),"\n",(0,n.jsx)(t.p,{children:'Another minor change is that the second step, sending the dialog request, is given an output format using the watsonx orchestrate tag "x-ibm-nl-output-template". This allows the user to forgo the very ugly table that shows up by default, although this can also be done through the watsonx orchestrate UI.'}),"\n",(0,n.jsx)(t.h3,{id:"setup",children:"Setup"}),"\n",(0,n.jsxs)(t.p,{children:["In order to build a skill flow from this ",(0,n.jsx)(t.a,{href:"https://github.ibm.com/ibm-client-engineering/solution-watsonx-orchestrate/blob/main/assets/openAPI_specs/otherBot/wxo_otherBot_v2_OAS.yaml",children:"OpenAPI specification"}),", import the spec and setup the authorization in the same that you would for watsonx assistant. Then follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'Click "Enhance this skill" for both skills in order to publish them.'}),"\n",(0,n.jsx)(t.li,{children:'Click the dropdown next to "Add Skills" and select "Create a skill flow"'}),"\n",(0,n.jsx)(t.li,{children:'Arrange the two skills you just imported into the skill flow, with the first skill being the "Create Session" skill and the second being "Make a dialog request w required"'}),"\n",(0,n.jsx)(t.li,{children:'Complete the inputs for the two skills, and select "hide this form from the user" if you would like to not show the form when running the skill flow. make sure that the "input.message_type" is set to "text" for the second skill.'}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var n=s(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);