(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17344,e=>{"use strict";var t=e.i(82699),a=e.i(89625),n=e.i(18229),r=e.i(66009),o=e.i(98451);let i=(0,o.default)("rocket",[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]),s=(0,o.default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);var d=e.i(10384),c=e.i(63332),l=e.i(91874),p=e.i(53558),u=e.i(85238),m=e.i(62813),g=e.i(68318),f=e.i(92940),h=e.i(12895),y=e.i(47926),b=e.i(29338),v=e.i(16592),x=e.i(39563);let k=e=>v.AGENTS.find(t=>t.id===e)?.short??e.replace("ag-","");function w({pack:e,onBack:a}){return(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:a,className:"mb-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-muted-foreground hover:text-foreground",children:[(0,t.jsx)(h.ArrowLeft,{className:"size-3.5"})," All packs"]}),(0,t.jsxs)("div",{className:"mb-3 flex items-start justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(c.Eyebrow,{children:[e.category," · ",e.jurisdiction]}),(0,t.jsx)("span",{className:(0,x.cn)("rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold","current"===e.status&&"border-success/30 text-success","superseded"===e.status&&"border-line-strong text-muted-foreground line-through","pending"===e.status&&"border-amber/30 text-amber"),children:e.status}),e.supersededBy&&(0,t.jsxs)("button",{onClick:()=>history.replaceState(null,"",`?tab=policy-library&pack=${e.supersededBy}`),className:"font-mono text-[10px] text-brand hover:underline",children:["replaced by ",e.supersededBy]})]}),(0,t.jsx)("h2",{className:"mt-1 text-[17px] font-bold tracking-tight",children:e.name})]}),(0,t.jsxs)("div",{className:"shrink-0 text-right font-mono text-[10.5px] leading-relaxed text-muted-foreground",children:[(0,t.jsxs)("div",{children:["last scanned ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.lastScanned})]}),(0,t.jsxs)("div",{children:["last content update ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.lastContentUpdate})]}),(0,t.jsxs)("div",{children:["next review ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.nextReview})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-5 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-3 space-y-4",children:[(0,t.jsxs)("div",{className:"paper rounded-lg border border-paper-line p-5",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2.5",children:"Source text · operative passages"}),(0,t.jsxs)("div",{className:"thin-scroll max-h-[380px] space-y-3 overflow-y-auto pr-2",children:[e.sourceText.map((e,a)=>(0,t.jsxs)("div",{className:"rounded-md border border-paper-line bg-paper px-4 py-3",children:[(0,t.jsx)("p",{className:"text-[12.5px] leading-relaxed",children:e.text}),(0,t.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"inline-flex items-center rounded border border-paper-blue-border/40 bg-paper-blue-tint px-1.5 py-px font-mono text-[10px] font-semibold text-paper-blue",children:e.citation}),(0,t.jsxs)("span",{className:"font-mono text-[9.5px] text-paper-secondary",children:["effective ",e.effectiveDate]})]})]},a)),0===e.sourceText.length&&(0,t.jsx)("p",{className:"text-[12px] text-paper-secondary",children:"Structured rules only; source passages ingest during the engagement."})]})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2",children:"Structured rules"}),(0,t.jsx)("pre",{className:"console-pane thin-scroll overflow-x-auto rounded-md px-3.5 py-3 text-[11px] leading-relaxed",children:e.rulesYaml})]})]}),(0,t.jsxs)("div",{className:"col-span-2 space-y-4 self-start",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2",children:"Sources monitored"}),(0,t.jsx)("div",{className:"space-y-1.5",children:e.sources.map(e=>(0,t.jsxs)("div",{className:"text-[11.5px]",children:[(0,t.jsx)("div",{className:"font-medium",children:e.label}),(0,t.jsxs)("div",{className:"font-mono text-[10px] text-dim",children:[e.url," · retrieved ",e.retrieved]})]},e.id))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2",children:"Version history"}),(0,t.jsx)("div",{className:"space-y-1",children:e.versionHistory.map(e=>(0,t.jsxs)("div",{className:"flex items-baseline gap-2 text-[11.5px]",children:[(0,t.jsx)("span",{className:"w-10 shrink-0 font-mono font-bold",children:e.version}),(0,t.jsx)("span",{className:"w-20 shrink-0 font-mono text-[10px] text-dim",children:e.date}),(0,t.jsx)("span",{className:"min-w-0 flex-1 text-muted-foreground",children:e.note})]},e.version))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2",children:"Dependents"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.dependents.agents.map(e=>(0,t.jsx)(f.default,{href:`/agents/${e}`,className:"rounded border border-brand/30 bg-brand/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand hover:bg-brand/[0.12]",children:k(e)},e))}),e.dependents.evalHint&&(0,t.jsx)("p",{className:"mt-2 text-[11px] text-muted-foreground",children:e.dependents.evalHint})]})]})]})]})}function _({highlight:e}){let[n,r]=(0,a.useState)(e??null),[o,i]=(0,a.useState)("All categories"),[s,d]=(0,a.useState)("All jurisdictions"),[l,p]=(0,a.useState)("All statuses"),[u,m]=(0,a.useState)("All agents"),g=(0,a.useRef)(null),[f,h]=(0,a.useState)(e);e!==f&&(h(e),e&&r(e));let z=(0,a.useMemo)(()=>["All jurisdictions","Federal",...Array.from(new Set(b.policyPacks.filter(e=>"Federal"!==e.jurisdiction).map(e=>e.jurisdiction))).sort()],[]),j=(0,a.useMemo)(()=>b.policyPacks.filter(e=>("All categories"===o||e.category===o)&&("All jurisdictions"===s||e.jurisdiction===s)&&("All statuses"===l||e.status===l)&&("All agents"===u||e.dependents.agents.includes(u))),[o,s,l,u]);(0,a.useEffect)(()=>{n&&g.current?.scrollTo({top:0})},[n]);let S=n?(0,b.packById)(n):null;return S?(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(w,{pack:S,onBack:()=>r(null)})}):(0,t.jsxs)("div",{className:"mt-4 space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-baseline justify-between",children:[(0,t.jsx)(c.Eyebrow,{children:"State coverage · ten Meridian states"}),(0,t.jsx)("span",{className:"text-[10.5px] text-dim",children:"some states have partial or no coverage"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:y.coverage.map(e=>(0,t.jsxs)("span",{title:e.note,className:(0,x.cn)("rounded border px-2.5 py-1.5 font-mono text-[11px] font-bold","complete"===e.level&&"border-success/30 bg-success/[0.06] text-success","partial"===e.level&&"border-amber/30 bg-amber/[0.06] text-amber","missing"===e.level&&"border-line-strong text-muted-foreground"),children:[e.state," · ",e.level]},e.state))})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[[{value:o,set:i,options:["All categories",...b.packCategories.map(e=>e.category)]},{value:s,set:d,options:z},{value:l,set:p,options:["All statuses","current","pending","superseded"]},{value:u,set:m,options:["All agents",...v.AGENTS.map(e=>e.id)]}].map((e,a)=>(0,t.jsx)("select",{value:e.value,onChange:t=>e.set(t.target.value),className:"h-9 cursor-pointer rounded-md border bg-card px-2.5 text-[12px] font-semibold outline-none",children:e.options.map(e=>(0,t.jsx)("option",{value:e,children:e.startsWith("ag-")?k(e):e},e))},a)),(0,t.jsxs)("span",{className:"ml-auto font-mono text-[11px] tabular-nums text-muted-foreground",children:[j.length," of ",b.policyPacks.length," packs"]})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex h-9 items-center gap-3 border-b px-4 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1",children:"Pack"}),(0,t.jsx)("span",{className:"w-28 shrink-0",children:"Jurisdiction"}),(0,t.jsx)("span",{className:"w-40 shrink-0",children:"Category"}),(0,t.jsx)("span",{className:"w-32 shrink-0",children:"Last scanned"}),(0,t.jsx)("span",{className:"w-28 shrink-0",children:"Next review"}),(0,t.jsx)("span",{className:"w-24 shrink-0",children:"Status"}),(0,t.jsx)("span",{className:"w-36 shrink-0",children:"Consumed by"})]}),(0,t.jsx)("div",{ref:g,className:"thin-scroll max-h-[460px] divide-y divide-line overflow-y-auto",children:j.map(e=>(0,t.jsxs)("button",{onClick:()=>r(e.id),className:"dense-row flex w-full items-center gap-3 px-4 text-left transition-colors hover:bg-fill-2",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-[12.5px] font-semibold",children:e.name}),(0,t.jsx)("span",{className:"w-28 shrink-0 text-[11.5px] text-muted-foreground",children:e.jurisdiction}),(0,t.jsx)("span",{className:"w-40 shrink-0 text-[11px] text-muted-foreground",children:e.category}),(0,t.jsx)("span",{className:"w-32 shrink-0 font-mono text-[10px] text-dim",children:e.lastScanned}),(0,t.jsx)("span",{className:"w-28 shrink-0 font-mono text-[10px] text-dim",children:e.nextReview}),(0,t.jsx)("span",{className:"w-24 shrink-0",children:(0,t.jsx)("span",{className:(0,x.cn)("rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold","current"===e.status&&"border-success/30 text-success","superseded"===e.status&&"border-line-strong text-muted-foreground line-through","pending"===e.status&&"border-amber/30 text-amber"),children:e.status})}),(0,t.jsxs)("span",{className:"flex w-36 shrink-0 flex-wrap gap-1",children:[e.dependents.agents.slice(0,2).map(e=>(0,t.jsx)("span",{className:"rounded border border-brand/25 bg-brand/[0.05] px-1 font-mono text-[8.5px] text-brand",children:k(e)},e)),e.dependents.agents.length>2&&(0,t.jsxs)("span",{className:"font-mono text-[9px] text-dim",children:["+",e.dependents.agents.length-2]})]})]},e.id))})]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"Every citation chip anywhere in the product deep-links to a pack’s source-text section. Refresh mechanisms: monitored URLs, scheduled re-crawls, customer uploads, forward-deployed ingestion."})]})}var z=e.i(52696),j=e.i(28668);let S=[{name:"Employees",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"reads",projectedMaster:!0,fields:[{unified:"worker_id",group:"Identity",state:"mapped",workday:"Worker_Reference.Employee_ID (RaaS delta)",sf:"PerPerson.personIdExternal (OData v2)"},{unified:"legal_name",group:"Identity",state:"mapped",workday:"Legal_Name_Data.Formatted_Name",sf:"PerPersonal.formattedName"},{unified:"first_name",group:"Identity",state:"mapped",workday:"Legal_Name_Data.Name_Detail_Data.First_Name",sf:"PerPersonal.firstName"},{unified:"middle_name",group:"Identity",state:"mapped",workday:"Legal_Name_Data.Name_Detail_Data.Middle_Name",sf:"PerPersonal.middleName"},{unified:"last_name",group:"Identity",state:"mapped",workday:"Legal_Name_Data.Name_Detail_Data.Last_Name",sf:"PerPersonal.lastName"},{unified:"preferred_name",group:"Identity",state:"mapped",workday:"Preferred_Name_Data",sf:null},{unified:"name_suffix",group:"Identity",state:"mapped",workday:null,sf:"PerPersonal.suffix"},{unified:"date_of_birth",group:"Identity",state:"mapped",workday:"Personal_Data.Birth_Date",sf:"PerPerson.dateOfBirth"},{unified:"national_id",group:"Identity",state:"transform",workday:"Personal_Data.Identification_Data.National_ID",sf:"PerNationalId.nationalId"},{unified:"gender",group:"Identity",state:"mapped",workday:"Personal_Data.Gender_Reference",sf:"PerPersonal.gender"},{unified:"marital_status",group:"Identity",state:"conflict",workday:"Personal_Data.Marital_Status_Reference",sf:"PerPersonal.maritalStatus",conflict:"Workday carries 7 marital status codes; SF Lakeshore carries 4. Collapsed to a shared set via crosswalk, SF code retained."},{unified:"ethnicity",group:"Identity",state:"transform",workday:"Personal_Data.Ethnicity_Reference",sf:"PerPersonal.ethnicity"},{unified:"veteran_status",group:"Identity",state:"mapped",workday:"Personal_Data.Military_Service_Data.Military_Status_Reference",sf:"PerGlobalInfoUSA.veteranStatus"},{unified:"position_id",group:"Job & Position",state:"mapped",workday:"Position_Data.Position_ID",sf:"EmpJob.position"},{unified:"business_title",group:"Job & Position",state:"mapped",workday:"Position_Data.Business_Title",sf:"EmpJob.jobTitle"},{unified:"job_code",group:"Job & Position",state:"mapped",workday:"Job_Profile_Reference.Job_Profile_ID",sf:"EmpJob.jobCode"},{unified:"job_family",group:"Job & Position",state:"mapped",workday:"Job_Profile_Data.Job_Family_Reference",sf:"FOJobFunction.externalCode"},{unified:"management_level",group:"Job & Position",state:"mapped",workday:"Job_Profile_Data.Management_Level_Reference",sf:"EmpJob.customString20 (job level picklist)"},{unified:"scheduled_weekly_hours",group:"Job & Position",state:"mapped",workday:"Position_Data.Scheduled_Weekly_Hours",sf:"EmpJob.standardHours"},{unified:"flsa_status",group:"Job & Position",state:"transform",workday:"Job_Profile_Data.Exempt",sf:"EmpJob.customString12 (FLSA picklist)"},{unified:"full_part_time",group:"Job & Position",state:"mapped",workday:"Position_Data.Position_Time_Type_Reference",sf:"EmpJob.isFulltimeEmployee"},{unified:"shift",group:"Job & Position",state:"mapped",workday:"Position_Data.Work_Shift_Reference",sf:"EmpJob.shiftCode"},{unified:"company_code",group:"Organization",state:"mapped",workday:"Organization_Data.Company_Reference",sf:"EmpJob.company"},{unified:"business_unit",group:"Organization",state:"mapped",workday:"Organization_Data.Business_Unit_Reference",sf:"EmpJob.businessUnit"},{unified:"division",group:"Organization",state:"mapped",workday:"Organization_Data.Custom_Organization_Reference (type: Division)",sf:"EmpJob.division"},{unified:"department",group:"Organization",state:"transform",workday:"Position_Data.Supervisory_Organization_Reference",sf:"EmpJob.department"},{unified:"supervisory_org_id",group:"Organization",state:"mapped",workday:"Position_Data.Supervisory_Organization_Reference.Organization_Reference_ID",sf:null},{unified:"cost_center",group:"Organization",state:"conflict",workday:"Organization_Data.Cost_Center_Reference.Organization_Reference_ID",sf:"EmpJob.costCenter",conflict:"Workday uses 6-digit finance cost center codes; SF Lakeshore kept 4-digit legacy Lawson codes. Resolved via the finance crosswalk, both retained."},{unified:"region",group:"Organization",state:"mapped",workday:"Organization_Data.Region_Reference",sf:"EmpJob.customString15 (region picklist)"},{unified:"pay_rate_type",group:"Compensation",state:"mapped",workday:"Compensation_Data.Pay_Rate_Type_Reference",sf:"EmpCompensation.payType"},{unified:"pay_group",group:"Compensation",state:"mapped",workday:"Payroll_Interface_Processing_Data.Pay_Group_Reference",sf:"EmpJob.customString08 (pay group picklist)"},{unified:"pay_grade",group:"Compensation",state:"mapped",workday:"Compensation_Data.Compensation_Grade_Reference",sf:"EmpJob.payGrade"},{unified:"annual_salary",group:"Compensation",state:"transform",workday:"Compensation_Summary_Data.Annualized_Summary_Data.Total_Base_Pay",sf:"EmpPayCompRecurring.paycompvalue"},{unified:"currency_code",group:"Compensation",state:"mapped",workday:"Compensation_Data.Currency_Reference",sf:"EmpCompensation.currencyCode"},{unified:"bonus_target_pct",group:"Compensation",state:"mapped",workday:"Bonus_Plan_Assignment_Data.Target_Percent",sf:"EmpCompensation.customDouble2 (bonus target)"},{unified:"comp_effective_date",group:"Compensation",state:"mapped",workday:"Compensation_Data.Effective_Date",sf:"EmpCompensation.startDate"},{unified:"work_state",group:"Location & Eligibility",state:"mapped",workday:"Location_Reference.Location_Address.State",sf:"EmpJob.location.state"},{unified:"work_location_id",group:"Location & Eligibility",state:"mapped",workday:"Position_Data.Business_Site_Reference",sf:"EmpJob.location"},{unified:"work_address",group:"Location & Eligibility",state:"mapped",workday:"Business_Site_Data.Address_Data.Formatted_Address",sf:"FOLocation.addressNavDEFLT.address1"},{unified:"remote_flag",group:"Location & Eligibility",state:"mapped",workday:"Position_Data.Flexible_Work_Arrangement_Data.Arrangement_Type",sf:"EmpJob.customString30 (remote indicator)"},{unified:"time_zone",group:"Location & Eligibility",state:"transform",workday:"Business_Site_Data.Time_Zone_Reference",sf:"FOLocation.timezone"},{unified:"i9_status",group:"Location & Eligibility",state:"mapped",workday:"Form_I9_Data.Verification_Status",sf:null},{unified:"benefits_eligibility_class",group:"Location & Eligibility",state:"mapped",workday:"Worker_Benefit_Data.Benefit_Group_Reference",sf:"EmpJob.customString22 (benefits class)"},{unified:"union_code",group:"Location & Eligibility",state:"mapped",workday:"Position_Data.Union_Member_Reference",sf:"EmpJob.customString18 (union local)"},{unified:"workers_comp_code",group:"Location & Eligibility",state:"mapped",workday:"Position_Data.Workers_Compensation_Code_Reference",sf:null},{unified:"work_email",group:"Contact",state:"mapped",workday:"Personal_Data.Contact_Data.Email_Address_Data (usage: work)",sf:"PerEmail.emailAddress (type: business)"},{unified:"personal_email",group:"Contact",state:"mapped",workday:"Personal_Data.Contact_Data.Email_Address_Data (usage: home)",sf:"PerEmail.emailAddress (type: personal)"},{unified:"work_phone",group:"Contact",state:"transform",workday:"Personal_Data.Contact_Data.Phone_Data (usage: work)",sf:"PerPhone.phoneNumber (type: business)"},{unified:"mobile_phone",group:"Contact",state:"mapped",workday:"Personal_Data.Contact_Data.Phone_Data (device: mobile)",sf:"PerPhone.phoneNumber (type: cell)"},{unified:"home_address",group:"Contact",state:"mapped",workday:"Personal_Data.Contact_Data.Address_Data (usage: home)",sf:"PerAddressDEFLT.address1"},{unified:"emergency_contact_name",group:"Contact",state:"mapped",workday:"Related_Person_Data.Emergency_Contact_Data.Formatted_Name",sf:"PerEmergencyContacts.name"},{unified:"emergency_contact_phone",group:"Contact",state:"mapped",workday:"Related_Person_Data.Emergency_Contact_Data.Phone_Data",sf:"PerEmergencyContacts.phone"},{unified:"hire_date",group:"Status & Dates",state:"conflict",workday:"Hire_Date",sf:"EmpEmployment.startDate",conflict:"Rehires: Workday keeps original hire date; SF resets on rehire. Normalized to earliest, both retained."},{unified:"original_hire_date",group:"Status & Dates",state:"mapped",workday:"Original_Hire_Date",sf:"EmpEmployment.originalStartDate"},{unified:"continuous_service_date",group:"Status & Dates",state:"mapped",workday:"Continuous_Service_Date",sf:"EmpEmployment.seniorityDate"},{unified:"employee_status",group:"Status & Dates",state:"transform",workday:"Worker_Status_Data.Active",sf:"EmpJob.emplStatus"},{unified:"termination_date",group:"Status & Dates",state:"mapped",workday:"Worker_Status_Data.Termination_Date",sf:"EmpEmployment.endDate"},{unified:"last_day_worked",group:"Status & Dates",state:"mapped",workday:"Worker_Status_Data.Last_Day_of_Work",sf:"EmpEmployment.lastDateWorked"},{unified:"termination_reason",group:"Status & Dates",state:"mapped",workday:"Worker_Status_Data.Primary_Termination_Reason_Reference",sf:"EmpJob.eventReason"},{unified:"rehire_eligible",group:"Status & Dates",state:"mapped",workday:"Worker_Status_Data.Eligible_for_Rehire",sf:"EmpEmployment.okToRehire"},{unified:"probation_end_date",group:"Status & Dates",state:"mapped",workday:"Employment_Data.Probation_End_Date",sf:"EmpJob.customDate3 (probation end)"}],unmappedNote:"SF PerPersonal.suffix has no Workday counterpart and stays source-only."},{name:"Employments",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"reads",projectedMaster:!0,fields:[{unified:"position_title",group:"Position",state:"mapped",workday:"Position_Title (RaaS delta report field)",sf:"EmpJob.jobTitle (EC Job Information, OData v2)"},{unified:"position_id",group:"Position",state:"mapped",workday:"Position_Reference.Position_ID",sf:"EmpJob.position"},{unified:"job_profile",group:"Position",state:"mapped",workday:"Job_Profile_Reference.Job_Profile_ID",sf:"EmpJob.jobCode"},{unified:"job_family_group",group:"Position",state:"mapped",workday:"Job_Profile_Data.Job_Family_Group_Reference",sf:null},{unified:"position_time_type",group:"Position",state:"transform",workday:"Position_Data.Position_Time_Type_Reference",sf:"EmpJob.isFulltimeEmployee"},{unified:"position_status",group:"Position",state:"mapped",workday:"Position_Data.Position_Status_Reference",sf:null},{unified:"headcount_type",group:"Position",state:"mapped",workday:"Position_Data.Headcount_Group_Reference",sf:null},{unified:"employee_class",group:"Position",state:"mapped",workday:null,sf:"EmpJob.employeeClass"},{unified:"career_track",group:"Position",state:"mapped",workday:"Job_Profile_Data.Job_Category_Reference",sf:"EmpJob.customString11 (career track)"},{unified:"employment_type",group:"Assignment",state:"conflict",workday:"Worker_Type_Reference",sf:"EmpEmployment.employmentType",conflict:"Contingent taxonomy differs: Workday worker types vs SF employment classes. Mapped via a maintained crosswalk table."},{unified:"fte",group:"Assignment",state:"mapped",workday:"Position_Data.FTE_Percent",sf:"EmpJob.fte"},{unified:"standard_hours",group:"Assignment",state:"mapped",workday:"Position_Data.Default_Weekly_Hours",sf:"EmpJob.standardHours"},{unified:"is_primary_job",group:"Assignment",state:"mapped",workday:"Worker_Job_Data.Primary_Job",sf:"EmpEmployment.isPrimary"},{unified:"work_location",group:"Assignment",state:"mapped",workday:"Position_Data.Business_Site_Reference",sf:"EmpJob.location"},{unified:"work_schedule",group:"Assignment",state:"mapped",workday:"Work_Schedule_Calendar_Reference",sf:"EmpJob.workscheduleCode"},{unified:"company",group:"Assignment",state:"mapped",workday:"Organization_Data.Company_Reference",sf:"EmpJob.company"},{unified:"manager_id",group:"Manager & Org",state:"mapped",workday:"Manager_Reference.Employee_ID",sf:"EmpJob.managerId"},{unified:"manager_name",group:"Manager & Org",state:"mapped",workday:"Manager_Reference.Formatted_Name",sf:"EmpJob.managerUserNav.defaultFullName"},{unified:"hr_partner_id",group:"Manager & Org",state:"mapped",workday:"Organization_Role_Data.HR_Partner_Reference",sf:"EmpJobRelationships.relUserId (type: hr manager)"},{unified:"matrix_manager_id",group:"Manager & Org",state:"mapped",workday:"Matrix_Organization_Reference.Manager_Reference",sf:"EmpJobRelationships.relUserId (type: matrix manager)"},{unified:"supervisory_org",group:"Manager & Org",state:"transform",workday:"Position_Data.Supervisory_Organization_Reference",sf:"EmpJob.department"},{unified:"job_entry_date",group:"Dates & Status",state:"mapped",workday:"Position_Data.Start_Date",sf:"EmpJob.startDate"},{unified:"contingent_end_date",group:"Dates & Status",state:"mapped",workday:"Contract_Data.Contract_End_Date",sf:null},{unified:"event_reason",group:"Dates & Status",state:"transform",workday:"Event_Classification_Subcategory_Reference",sf:"EmpJob.eventReason"},{unified:"union_seniority_date",group:"Dates & Status",state:"mapped",workday:"Union_Membership_Data.Seniority_Date",sf:"EmpJob.customDate7 (union seniority)"}],unmappedNote:"Workday runs position management; SF Lakeshore runs job management, so position and headcount fields stay Workday-only."},{name:"Compensation",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"writes",fields:[{unified:"base_pay",group:"Base Pay",state:"mapped",workday:"Compensation_Data.Base_Pay (domain: Worker Data)",sf:"EmpCompensation.paycompvalue"},{unified:"hourly_rate",group:"Base Pay",state:"mapped",workday:"Compensation_Summary_Data.Hourly_Rate",sf:"EmpPayCompRecurring.paycompvalue (component: hourly)"},{unified:"annualized_base",group:"Base Pay",state:"transform",workday:"Compensation_Summary_Data.Annualized_Summary_Data.Total_Base_Pay",sf:"EmpPayCompRecurring.paycompvalue"},{unified:"frequency",group:"Base Pay",state:"transform",workday:"Compensation_Data.Frequency_Reference",sf:"EmpPayCompRecurring.frequency"},{unified:"currency",group:"Base Pay",state:"mapped",workday:"Currency_Reference",sf:"EmpCompensation.currencyCode"},{unified:"pay_range",group:"Ranges & Grades",state:"conflict",workday:"Compensation_Grade_Reference",sf:"EmpPayCompRecurring.payComponent",conflict:"Range granularity differs (grade vs component); normalized to min/mid/max with source retained."},{unified:"grade_profile",group:"Ranges & Grades",state:"mapped",workday:"Compensation_Grade_Profile_Reference",sf:null},{unified:"range_minimum",group:"Ranges & Grades",state:"mapped",workday:"Compensation_Grade_Data.Pay_Range_Minimum",sf:"FOPayRange.minimumAmount"},{unified:"range_midpoint",group:"Ranges & Grades",state:"mapped",workday:"Compensation_Grade_Data.Pay_Range_Midpoint",sf:"FOPayRange.midPoint"},{unified:"range_maximum",group:"Ranges & Grades",state:"mapped",workday:"Compensation_Grade_Data.Pay_Range_Maximum",sf:"FOPayRange.maximumAmount"},{unified:"compa_ratio",group:"Ranges & Grades",state:"mapped",workday:"Compensation_Summary_Data.Compa_Ratio",sf:null},{unified:"bonus_plan",group:"Variable Pay",state:"mapped",workday:"Bonus_Plan_Assignment_Data.Bonus_Plan_Reference",sf:"EmpPayCompRecurring.payComponent (bonus target)"},{unified:"target_bonus_amount",group:"Variable Pay",state:"mapped",workday:"Bonus_Plan_Assignment_Data.Target_Amount",sf:"EmpPayCompNonRecurring.value (bonus target)"},{unified:"commission_plan",group:"Variable Pay",state:"mapped",workday:"Commission_Plan_Assignment_Data.Plan_Reference",sf:null},{unified:"allowance_plan",group:"Variable Pay",state:"transform",workday:"Allowance_Plan_Assignment_Data.Plan_Reference",sf:"EmpPayCompRecurring.payComponent (allowance codes)"},{unified:"stock_plan",group:"Variable Pay",state:"mapped",workday:"Stock_Plan_Assignment_Data.Plan_Reference",sf:null},{unified:"one_time_payment",group:"Variable Pay",state:"mapped",workday:"One_Time_Payment_Data.Payment_Plan_Reference",sf:"EmpPayCompNonRecurring.payComponentCode"},{unified:"merit_plan",group:"Variable Pay",state:"mapped",workday:"Merit_Plan_Assignment_Data.Plan_Reference",sf:null},{unified:"comp_change_reason",group:"Change History",state:"mapped",workday:"Compensation_Change_Reason_Reference",sf:"EmpCompensation.eventReason"},{unified:"last_pay_change_date",group:"Change History",state:"mapped",workday:"Compensation_Data.Last_Change_Date",sf:"EmpCompensation.startDate (latest record)"}],unmappedNote:"Lakeshore has no commissioned or equity-eligible roles; those plans stay Workday-only."},{name:"Absences",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"writes",projectedMaster:!0,fields:[{unified:"absence_id",group:"Request",state:"mapped",workday:"Leave_Request_Reference.Leave_Request_ID",sf:"TimeOff.externalCode"},{unified:"absence_type",group:"Request",state:"mapped",workday:"Absence Management: Leave_Type_Reference",sf:"TimeOff.timeType"},{unified:"start_date",group:"Request",state:"mapped",workday:"Leave_Start_Date",sf:"TimeOff.startDate"},{unified:"end_date",group:"Request",state:"mapped",workday:"Leave_End_Date",sf:"TimeOff.endDate"},{unified:"requested_hours",group:"Request",state:"transform",workday:"Leave_Request_Data.Requested_Units",sf:"TimeOff.quantityInHours"},{unified:"total_units",group:"Request",state:"mapped",workday:"Leave_Request_Data.Total_Units",sf:"TimeOff.quantityInDays"},{unified:"request_status",group:"Request",state:"transform",workday:"Leave_Request_Event_Data.Status",sf:"TimeOff.approvalStatus"},{unified:"leave_reason",group:"Request",state:"mapped",workday:"Leave_Type_Reason_Reference",sf:null},{unified:"intermittent_flag",group:"Request",state:"mapped",workday:"Leave_Request_Data.Intermittent",sf:null},{unified:"reduced_schedule_pct",group:"Request",state:"mapped",workday:"Leave_Request_Data.Reduced_Schedule_Percent",sf:null},{unified:"notification_date",group:"Certification & Approval",state:"mapped",workday:"Leave_Request_Event_Data.Initiated_Date",sf:"TimeOff.createdDateTime"},{unified:"approved_date",group:"Certification & Approval",state:"transform",workday:"Leave_Request_Event_Data.Completed_Date",sf:"TimeOff.lastModifiedDateTime"},{unified:"approved_by",group:"Certification & Approval",state:"mapped",workday:"Leave_Request_Event_Data.Approver_Reference",sf:null},{unified:"protection_basis",group:"Legal & Protection",state:"conflict",workday:null,sf:null,conflict:"Neither system models the legal basis (PDL vs FMLA vs CFRA). Oneward masters this field today on the leave plan."},{unified:"pay_during_leave",group:"Legal & Protection",state:"transform",workday:"Leave_Type_Data.Payment_Effect",sf:"TimeOff.timeTypeNav.classification"},{unified:"benefit_continuation_flag",group:"Legal & Protection",state:"mapped",workday:"Leave_Type_Data.Benefits_Effect",sf:null},{unified:"seniority_effect",group:"Legal & Protection",state:"mapped",workday:"Leave_Type_Data.Seniority_Effect",sf:null},{unified:"expected_return_date",group:"Return to Work",state:"mapped",workday:"Leave_Request_Data.Estimated_Last_Day_of_Leave",sf:"EmpJob.expectedReturnDate"},{unified:"actual_return_date",group:"Return to Work",state:"mapped",workday:"Leave_Return_Event_Data.First_Day_Back_at_Work",sf:"EmpJob.startDate (return event)"},{unified:"rtw_event_reason",group:"Return to Work",state:"mapped",workday:"Leave_Return_Event_Data.Event_Reason",sf:"EmpJob.eventReason (return from leave)"}],unmappedNote:"SF time off is a lightweight request model; intermittent tracking and entitlement effects exist only on the Workday side and in the unified layer."},{name:"Time Off Balances",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"balance_hours",group:"Balances",state:"mapped",workday:"Time_Off_Balance (RaaS)",sf:"TimeAccountBalance.balance"},{unified:"pending_requests_hours",group:"Balances",state:"mapped",workday:"Time_Off_Balance_Data.Pending_Balance",sf:null},{unified:"carryover_hours",group:"Balances",state:"mapped",workday:"Time_Off_Balance_Data.Carryover_Balance",sf:"TimeAccountDetail.bookingAmount (carryover postings)"},{unified:"carryover_expiration_date",group:"Balances",state:"mapped",workday:"Time_Off_Plan_Data.Carryover_Expiration_Date",sf:"TimeAccount.endDate"},{unified:"balance_as_of_date",group:"Balances",state:"mapped",workday:"Time_Off_Balance_Data.As_Of_Date",sf:"TimeAccountBalance.asOfDate"},{unified:"accrual_rate",group:"Accruals",state:"mapped",workday:"Accrual_Data",sf:null},{unified:"accrued_ytd",group:"Accruals",state:"transform",workday:"Accrual_Data.Accrued_Year_To_Date",sf:"TimeAccountDetail.bookingAmount (accrual postings)"},{unified:"taken_ytd",group:"Accruals",state:"transform",workday:"Time_Off_Balance_Data.Taken_Year_To_Date",sf:"TimeAccountDetail.bookingAmount (deduction postings)"},{unified:"accrual_frequency",group:"Accruals",state:"mapped",workday:"Accrual_Data.Frequency_Reference",sf:null},{unified:"plan_id",group:"Plan Setup",state:"mapped",workday:"Time_Off_Plan_Reference.Time_Off_Plan_ID",sf:"TimeAccount.accountType"},{unified:"plan_name",group:"Plan Setup",state:"mapped",workday:"Time_Off_Plan_Data.Plan_Name",sf:"TimeAccountType.externalName"},{unified:"plan_unit",group:"Plan Setup",state:"transform",workday:"Time_Off_Plan_Data.Unit_of_Time",sf:"TimeAccountType.unit"}],unmappedNote:"SF accrual rules live in Time Off configuration, not the API surface; balance-only for Lakeshore."},{name:"Timesheets",masteredBy:"UKG Pro WFM",oneward:"reads",fields:[{unified:"worked_hours",group:"Hours & Totals",state:"mapped",workday:"timecard.totals.workedHours",sf:null},{unified:"regular_hours",group:"Hours & Totals",state:"mapped",workday:"timecard.totals.regularHours",sf:null},{unified:"ot_hours",group:"Hours & Totals",state:"mapped",workday:"timecard.totals.overtimeHours",sf:null},{unified:"doubletime_hours",group:"Hours & Totals",state:"mapped",workday:"timecard.totals.doubletimeHours",sf:null},{unified:"shift_differential_hours",group:"Hours & Totals",state:"transform",workday:"timecard.payCodeTotals (14 differential codes)",sf:null},{unified:"pay_period_start",group:"Period & Punches",state:"mapped",workday:"timecard.periodSpan.begin",sf:null},{unified:"pay_period_end",group:"Period & Punches",state:"mapped",workday:"timecard.periodSpan.end",sf:null},{unified:"punches",group:"Period & Punches",state:"mapped",workday:"timecard.punches[].punchDtm",sf:null},{unified:"exceptions",group:"Period & Punches",state:"mapped",workday:"timecard.exceptions[].exceptionType",sf:null},{unified:"approval_status",group:"Approval",state:"mapped",workday:"timecard.approvals.status",sf:null},{unified:"approved_by_manager_id",group:"Approval",state:"mapped",workday:"timecard.approvals.managerId",sf:null}],unmappedNote:"Sourced from UKG employee-changes and timecard reads; HCM systems carry no timecard detail."},{name:"Payroll Inputs",masteredBy:"ADP GlobalView",oneward:"reads",fields:[{unified:"earnings_line",group:"Earnings",state:"mapped",workday:"IT0015.Additional_Payment (wage type, amount, date)",sf:null},{unified:"regular_earnings_hours",group:"Earnings",state:"mapped",workday:"IT2010.Employee_Remuneration.Hours (WT 1000)",sf:"timecard.totals.regularHours"},{unified:"overtime_earnings_hours",group:"Earnings",state:"mapped",workday:"IT2010.Employee_Remuneration.Hours (WT 1300)",sf:"timecard.totals.overtimeHours"},{unified:"doubletime_earnings_hours",group:"Earnings",state:"mapped",workday:"IT2010.Employee_Remuneration.Hours (WT 1310)",sf:"timecard.totals.doubletimeHours"},{unified:"shift_differential_amount",group:"Earnings",state:"transform",workday:"IT2010.Employee_Remuneration (WT 1400 series)",sf:"timecard.payCodeTotals (differential codes)"},{unified:"on_call_hours",group:"Earnings",state:"mapped",workday:"IT2010.Employee_Remuneration.Hours (WT 1500)",sf:"timecard.payCodeTotals (on-call)"},{unified:"pto_hours_paid",group:"Earnings",state:"transform",workday:"IT2001.Absences (paid time off wage types)",sf:"timecard.payCodeTotals (PTO codes)"},{unified:"retro_pay_amount",group:"Earnings",state:"mapped",workday:"IT0015.Additional_Payment (WT 1900 retro)",sf:null},{unified:"bonus_payment",group:"Earnings",state:"mapped",workday:"IT0015.Additional_Payment (WT 2000)",sf:null},{unified:"severance_payment",group:"Earnings",state:"mapped",workday:"IT0015.Additional_Payment (WT 2100)",sf:null},{unified:"deduction_line",group:"Deductions & Garnishments",state:"mapped",workday:"IT0014.Recurring_Deduction (wage type, amount)",sf:null},{unified:"benefit_deduction_pretax",group:"Deductions & Garnishments",state:"mapped",workday:"IT0014.Recurring_Deduction (WT 3000 series)",sf:null},{unified:"benefit_deduction_posttax",group:"Deductions & Garnishments",state:"mapped",workday:"IT0014.Recurring_Deduction (WT 3100 series)",sf:null},{unified:"retirement_401k_pct",group:"Deductions & Garnishments",state:"mapped",workday:"IT0169.Savings_Plan.Contribution_Percent",sf:null},{unified:"retirement_401k_loan",group:"Deductions & Garnishments",state:"mapped",workday:"IT0045.Company_Loan.Repayment_Amount",sf:null},{unified:"garnishment_order",group:"Deductions & Garnishments",state:"mapped",workday:"IT0194.Garnishment_Document.Order_Reference",sf:null},{unified:"garnishment_amount",group:"Deductions & Garnishments",state:"mapped",workday:"IT0195.Garnishment_Order.Deduction_Amount",sf:null},{unified:"union_dues",group:"Deductions & Garnishments",state:"mapped",workday:"IT0014.Recurring_Deduction (WT 3300 union dues)",sf:null},{unified:"federal_w4_status",group:"Taxes",state:"mapped",workday:"IT0210.Withholding_Info_W4 (federal)",sf:null},{unified:"state_withholding",group:"Taxes",state:"mapped",workday:"IT0210.Withholding_Info_W4 (state)",sf:null},{unified:"residence_tax_area",group:"Taxes",state:"mapped",workday:"IT0207.Residence_Tax_Area",sf:null},{unified:"work_tax_area",group:"Taxes",state:"mapped",workday:"IT0208.Work_Tax_Area",sf:null},{unified:"suta_state",group:"Taxes",state:"mapped",workday:"IT0209.Unemployment_State",sf:null},{unified:"direct_deposit_account",group:"Banking & Distribution",state:"mapped",workday:"IT0009.Bank_Details.Account_Number",sf:null},{unified:"direct_deposit_split",group:"Banking & Distribution",state:"mapped",workday:"IT0009.Bank_Details (subtype 1, percent split)",sf:null},{unified:"payment_method",group:"Banking & Distribution",state:"mapped",workday:"IT0009.Bank_Details.Payment_Method",sf:null},{unified:"pay_group_assignment",group:"Pay Cycle",state:"mapped",workday:"IT0001.Org_Assignment.Payroll_Area",sf:null},{unified:"pay_period_id",group:"Pay Cycle",state:"conflict",workday:"Payroll_Period.Period_Number",sf:"timecard.periodSpan",conflict:"Pay period boundaries differ: UKG closes timecards at 11:59 pm local; GlobalView periods end at midnight ET. Aligned via the period crosswalk before load."},{unified:"off_cycle_payment",group:"Pay Cycle",state:"mapped",workday:"IT0267.Off_Cycle_Payment",sf:null},{unified:"cost_assignment_override",group:"Pay Cycle",state:"mapped",workday:"IT0027.Cost_Distribution",sf:null},{unified:"time_load_batch",group:"Pay Cycle",state:"mapped",workday:"Inbound_Interface.Batch_Reference",sf:"exportJobs[].batchId"}],unmappedNote:"ADP Payroll Input use case is the sole source; Workday payroll results are read-only by design."},{name:"Documents",masteredBy:"Source-specific (Workday worker documents, Greenhouse attachments)",oneward:"writes",fields:[{unified:"document_id",group:"Document Record",state:"mapped",workday:"Worker_Document_Reference.Document_ID",sf:"Attachment.attachmentId"},{unified:"document_type",group:"Document Record",state:"mapped",workday:"Worker_Document_Category",sf:"Attachment.module"},{unified:"filename",group:"Document Record",state:"mapped",workday:"Worker_Document_Data.Filename",sf:"Attachment.fileName"},{unified:"effective_date",group:"Document Record",state:"mapped",workday:"Document_Date",sf:null},{unified:"signed_flag",group:"Document Record",state:"mapped",workday:"Worker_Document_Data.eSignature_Status",sf:null},{unified:"uploaded_by",group:"Storage & Retention",state:"mapped",workday:"Worker_Document_Data.Uploaded_By_Reference",sf:"Attachment.createdBy"},{unified:"upload_date",group:"Storage & Retention",state:"mapped",workday:"Worker_Document_Data.Created_Moment",sf:"Attachment.createdDateTime"},{unified:"file_size",group:"Storage & Retention",state:"mapped",workday:"Worker_Document_Data.File_Size",sf:"Attachment.fileSize"},{unified:"mime_type",group:"Storage & Retention",state:"mapped",workday:"Worker_Document_Data.Content_Type",sf:"Attachment.mimeType"},{unified:"retention_class",group:"Storage & Retention",state:"mapped",workday:"Document_Retention_Policy_Reference",sf:null},{unified:"expiration_date",group:"Storage & Retention",state:"mapped",workday:"Worker_Document_Data.Expiration_Date (licenses, certifications)",sf:null}],unmappedNote:"Greenhouse attachments carry no retention or expiration metadata; retention policy applies from the Workday side only."},{name:"Performance",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"latest_rating",group:"Ratings",state:"conflict",workday:"Performance_Rating (domain: Worker Data)",sf:"FormHeader.formDataId",conflict:"SF ratings live in forms, not a field; extracted with the MDF read and cycle-mapped."},{unified:"rating_scale",group:"Ratings",state:"transform",workday:"Review_Rating_Scale_Reference",sf:"FormRatingScale.scaleId"},{unified:"self_rating",group:"Ratings",state:"mapped",workday:"Employee_Evaluation_Data.Self_Rating",sf:"FormSummary.selfRating (MDF read)"},{unified:"potential_rating",group:"Ratings",state:"mapped",workday:"Talent_Assessment_Data.Potential_Reference",sf:null},{unified:"nine_box_position",group:"Ratings",state:"mapped",workday:"Talent_Matrix_Placement_Reference",sf:null},{unified:"review_cycle_id",group:"Review Cycle",state:"mapped",workday:"Performance_Review_Data.Review_Period_Reference",sf:"FormHeader.formTemplateId"},{unified:"review_status",group:"Review Cycle",state:"transform",workday:"Performance_Review_Data.Review_Status",sf:"FormHeader.formDataStatus"},{unified:"review_due_date",group:"Review Cycle",state:"mapped",workday:"Performance_Review_Data.Due_Date",sf:"FormHeader.formDueDate"},{unified:"completed_date",group:"Review Cycle",state:"mapped",workday:"Performance_Review_Data.Completed_Date",sf:"FormHeader.formCompletedDate"},{unified:"reviewer_id",group:"Review Cycle",state:"mapped",workday:"Performance_Review_Data.Evaluator_Reference",sf:"FormHeader.formOriginator"},{unified:"goal_plan",group:"Goals",state:"mapped",workday:"Employee_Goal_Data.Goal_Plan_Reference",sf:"Goal_1 (goal plan template)"},{unified:"goal_completion_pct",group:"Goals",state:"mapped",workday:"Employee_Goal_Data.Completion_Percent",sf:"Goal_1.percentComplete"}],unmappedNote:"Lakeshore runs no talent module; potential and matrix placements stay Workday-only."},{name:"Skills",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"skill_id",group:"Skill Record",state:"mapped",workday:"Skill_Reference.Skill_ID",sf:null},{unified:"skill_name",group:"Skill Record",state:"mapped",workday:"Skill_Reference",sf:null},{unified:"proficiency",group:"Skill Record",state:"mapped",workday:"Skill_Level",sf:null},{unified:"skill_source",group:"Skill Record",state:"mapped",workday:"Skill_Item_Data.Source (worker-entered vs inferred)",sf:null},{unified:"last_used_date",group:"Skill Record",state:"mapped",workday:"Skill_Item_Data.Last_Used",sf:null},{unified:"years_experience",group:"Skill Record",state:"mapped",workday:"Skill_Item_Data.Years_of_Experience",sf:null},{unified:"certification_name",group:"Certifications & Licenses",state:"mapped",workday:"Certification_Data.Certification_Reference",sf:"Background_Certificates.certificationName"},{unified:"certification_number",group:"Certifications & Licenses",state:"mapped",workday:"Certification_Data.Certification_Number",sf:"Background_Certificates.certificateNumber"},{unified:"license_state",group:"Certifications & Licenses",state:"mapped",workday:"Certification_Data.Issuing_Authority (state board)",sf:"Background_Certificates.state"},{unified:"license_expiration",group:"Certifications & Licenses",state:"mapped",workday:"Certification_Data.Expiration_Date",sf:"Background_Certificates.endDate"},{unified:"verification_status",group:"Certifications & Licenses",state:"conflict",workday:null,sf:null,conflict:"Primary-source verification lives in the credentialing vendor, not either HCM. Oneward joins it from the PSV feed."}],unmappedNote:"Lakeshore skills are unstructured resume text; extracted, not mapped."},{name:"Job Requisitions",masteredBy:"Greenhouse",oneward:"writes",fields:[{unified:"req_id",group:"Requisition",state:"mapped",workday:"Job.requisition_id",sf:null},{unified:"job_name",group:"Requisition",state:"mapped",workday:"Job.name",sf:null},{unified:"req_status",group:"Requisition",state:"mapped",workday:"Job.status",sf:null},{unified:"openings_count",group:"Requisition",state:"mapped",workday:"Job.openings[] (open count)",sf:null},{unified:"opening_ids",group:"Requisition",state:"transform",workday:"Job.openings[].opening_id",sf:"Position_Data.Position_ID (Workday)"},{unified:"department",group:"Requisition",state:"transform",workday:"Job.departments[].name",sf:"Supervisory_Organization_Reference (Workday)"},{unified:"office",group:"Requisition",state:"mapped",workday:"Job.offices[].name",sf:"Business_Site_Reference (Workday)"},{unified:"posting_text",group:"Posting",state:"mapped",workday:"JobPost.content",sf:null},{unified:"posting_status",group:"Posting",state:"mapped",workday:"JobPost.live",sf:null},{unified:"salary_range_posted",group:"Posting",state:"mapped",workday:"Job.custom_fields.salary_range",sf:null},{unified:"hiring_manager",group:"Hiring Team",state:"mapped",workday:"Job.hiring_team.hiring_managers[].id",sf:"Manager_Reference.Employee_ID (Workday)"},{unified:"recruiter",group:"Hiring Team",state:"mapped",workday:"Job.hiring_team.recruiters[].id",sf:null}],unmappedNote:"Greenhouse Harvest is the source; posting writes are approval-gated."},{name:"Applications",masteredBy:"Greenhouse",oneward:"writes",fields:[{unified:"application_id",group:"Application",state:"mapped",workday:"Application.id",sf:null},{unified:"candidate_id",group:"Application",state:"mapped",workday:"Application.candidate_id",sf:null},{unified:"stage",group:"Application",state:"mapped",workday:"Application.current_stage.name",sf:null},{unified:"applied_date",group:"Application",state:"mapped",workday:"Application.applied_at",sf:null},{unified:"source",group:"Application",state:"mapped",workday:"Application.source.public_name",sf:null},{unified:"rejection_reason",group:"Application",state:"mapped",workday:"Application.rejection_reason.name",sf:null},{unified:"scorecards",group:"Interview & Scorecards",state:"mapped",workday:"Scorecard.overall_recommendation",sf:null},{unified:"interviews",group:"Interview & Scorecards",state:"mapped",workday:"ScheduledInterview.start.date_time",sf:null},{unified:"offer_status",group:"Offer",state:"mapped",workday:"Offer.status",sf:null},{unified:"offer_start_date",group:"Offer",state:"transform",workday:"Offer.starts_at",sf:"Hire_Date (Workday hire integration)"},{unified:"offer_salary",group:"Offer",state:"mapped",workday:"Offer.custom_fields.salary",sf:"Compensation_Data.Base_Pay (Workday hire integration)"}],unmappedNote:"Candidate PII stays in Greenhouse; only hired candidates flow to the HCM through the hire integration."}],C=["Agents","Agent Identities","Workflows","Policies","Approvals","Evals","Audit","Leave plans (protection basis)"],D={Timesheets:{cols:["UKG Pro WFM path","HCM counterpart"],heading:"field-level mapping from the source system"},"Payroll Inputs":{cols:["ADP GlobalView path","UKG Pro WFM feed"],heading:"field-level mapping from the source systems"},"Job Requisitions":{cols:["Greenhouse Harvest path","HCM counterpart"],heading:"field-level mapping from the source system"},Applications:{cols:["Greenhouse Harvest path","HCM counterpart"],heading:"field-level mapping from the source system"}},P={cols:["Workday (Meridian)","SuccessFactors (Lakeshore)"],heading:"field-level mapping across the dual HCM"},I={mapped:"border-line-strong bg-fill-4 text-foreground/70",transform:"border-brand/40 bg-brand-tint text-brand",conflict:"border-amber/35 bg-amber-tint text-amber"};function A({value:e}){return null===e?(0,t.jsx)("span",{className:"font-mono text-[10.5px] leading-snug text-muted-foreground/50",children:"unmapped · source-only"}):(0,t.jsx)("span",{className:"break-words font-mono text-[10.5px] leading-snug text-foreground/85",children:e})}function R(){let[e,n]=(0,a.useState)(S[1].name),[r,o]=(0,a.useState)(!1),[i,s]=(0,a.useState)(""),[d,l]=(0,a.useState)({}),p=S.find(t=>t.name===e),u=D[p.name]??P,m=i.trim().toLowerCase(),g=(0,a.useMemo)(()=>{let e=[],t=new Map;for(let a of p.fields){let n=a.group??"Fields";t.has(n)||(t.set(n,[]),e.push(n)),t.get(n).push(a)}return e.map(e=>({group:e,rows:t.get(e)}))},[p]),f=e=>!m||e.unified.toLowerCase().includes(m)||(e.workday??"").toLowerCase().includes(m)||(e.sf??"").toLowerCase().includes(m),h=g.map(({group:e,rows:t})=>({group:e,rows:t.filter(f)})).filter(e=>e.rows.length>0),y=p.fields.length,b=p.fields.filter(e=>"transform"===e.state).length,v=p.fields.filter(e=>"conflict"===e.state).length,k=p.fields.filter(e=>void 0!==e.state&&(null!==e.workday||null!==e.sf)).length;return(0,t.jsxs)("div",{className:"mt-4 grid grid-cols-7 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-2 space-y-4 self-start",children:[(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-card",children:[(0,t.jsx)("div",{className:"border-b px-3.5 py-2",children:(0,t.jsx)(c.Eyebrow,{children:"Unified objects"})}),(0,t.jsx)("div",{className:"divide-y divide-line",children:S.map(a=>(0,t.jsxs)("button",{onClick:()=>n(a.name),className:(0,x.cn)("flex w-full items-center justify-between px-3.5 py-2 text-left transition-colors hover:bg-fill-2",e===a.name&&"bg-fill-4"),children:[(0,t.jsx)("span",{className:"text-[12.5px] font-semibold",children:a.name}),(0,t.jsx)("span",{className:(0,x.cn)("rounded border px-1 font-mono text-[8.5px] font-bold uppercase","writes"===a.oneward?"border-amber/35 bg-amber-tint text-amber":"masters"===a.oneward?"border-brand/40 bg-brand-tint text-brand":"border-line-strong bg-fill-4 text-foreground/70"),children:a.oneward})]},a.name))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,t.jsx)(c.Eyebrow,{children:"Object mastery"}),(0,t.jsx)("button",{onClick:()=>o(e=>!e),className:(0,x.cn)("rounded border px-2 py-1 text-[10.5px] font-semibold transition-colors",r?"border-brand/40 bg-brand/[0.08] text-brand":"text-muted-foreground hover:text-foreground"),children:r?"Projected: after HRIS renewal":"Current state"})]}),(0,t.jsx)("div",{className:"space-y-1",children:S.map(e=>(0,t.jsxs)("div",{className:(0,x.cn)("flex items-center justify-between rounded px-2 py-1 text-[11.5px]",r&&e.projectedMaster&&"bg-brand/[0.08] ring-1 ring-inset ring-brand/30"),children:[(0,t.jsx)("span",{className:"font-medium",children:e.name}),(0,t.jsx)("span",{className:(0,x.cn)("font-mono text-[9.5px]",r&&e.projectedMaster?"font-bold text-brand":"text-muted-foreground"),children:r&&e.projectedMaster?"Oneward masters":e.masteredBy.split("·")[0].trim()})]},e.name))}),(0,t.jsxs)("div",{className:"mt-3 border-t pt-2.5",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-1 !text-[8.5px]",children:"Oneward already masters"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:C.map(e=>(0,t.jsx)("span",{className:"rounded border border-brand/25 bg-brand/[0.05] px-1.5 py-0.5 font-mono text-[9px] text-brand",children:e},e))})]}),(0,t.jsx)("p",{className:"mt-2.5 text-[10.5px] leading-relaxed text-muted-foreground",children:"Current state: the systems of record master their objects; Oneward reads, writes through their business processes, and masters the agent layer. The projected-state toggle shows which objects would move to Oneward mastery after an HRIS renewal decision."})]})]}),(0,t.jsxs)("div",{className:"col-span-5 self-start rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b px-4 py-2.5",children:[(0,t.jsxs)(c.Eyebrow,{children:[p.name," · ",u.heading]}),(0,t.jsxs)("span",{className:"font-mono text-[10px] text-muted-foreground",children:["mastered by ",p.masteredBy]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between gap-3 border-b px-4 py-2",children:[(0,t.jsxs)("span",{className:"font-mono text-[10.5px] tabular-nums text-muted-foreground",children:[k," of ",y," source fields mapped · ",b," transforms · ",v," conflicts resolved via crosswalk"]}),(0,t.jsx)("input",{value:i,onChange:e=>s(e.target.value),placeholder:"Filter fields or paths",className:"h-6 w-52 rounded border border-line-strong bg-fill-3 px-2 font-mono text-[10.5px] outline-none placeholder:text-muted-foreground/60 focus:border-brand/50"})]}),(0,t.jsxs)("div",{className:"grid grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)_72px] gap-0 border-b px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",children:[(0,t.jsx)("span",{children:"Unified field"}),(0,t.jsx)("span",{children:u.cols[0]}),(0,t.jsx)("span",{children:u.cols[1]}),(0,t.jsx)("span",{className:"text-right",children:"State"})]}),(0,t.jsxs)("div",{className:"divide-y divide-line",children:[h.map(({group:e,rows:a})=>{let n=`${p.name}/${e}`,r=!m&&d[n];return(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:()=>l(e=>({...e,[n]:!e[n]})),className:"flex w-full items-center gap-1.5 bg-fill-1 px-4 py-1.5 text-left transition-colors hover:bg-fill-2",children:[r?(0,t.jsx)(j.ChevronRight,{className:"size-3 text-muted-foreground/50"}):(0,t.jsx)(z.ChevronDown,{className:"size-3 text-muted-foreground"}),(0,t.jsx)("span",{className:"text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",children:e}),(0,t.jsx)("span",{className:"font-mono text-[9px] text-muted-foreground/60",children:a.length})]}),!r&&(0,t.jsx)("div",{className:"divide-y divide-line border-t border-line",children:a.map(e=>(0,t.jsxs)("div",{className:(0,x.cn)("px-4 py-2.5","conflict"===e.state&&"bg-amber/[0.03]"),children:[(0,t.jsxs)("div",{className:"grid grid-cols-[150px_minmax(0,1fr)_minmax(0,1fr)_72px] items-baseline gap-0",children:[(0,t.jsx)("span",{className:"pr-2 font-mono text-[11.5px] font-bold text-brand",children:e.unified}),(0,t.jsx)("span",{className:"pr-3",children:(0,t.jsx)(A,{value:e.workday})}),(0,t.jsx)("span",{className:"pr-3",children:(0,t.jsx)(A,{value:e.sf})}),(0,t.jsx)("span",{className:"text-right",children:e.state&&(0,t.jsx)("span",{title:"conflict"===e.state?e.conflict:void 0,className:(0,x.cn)("rounded border px-1 font-mono text-[8.5px] font-bold uppercase",I[e.state]),children:e.state})})]}),e.conflict&&(0,t.jsxs)("p",{className:"mt-1.5 text-[11px] leading-snug text-amber",children:["Conflict: ",e.conflict]})]},e.unified))})]},n)}),0===h.length&&(0,t.jsxs)("div",{className:"px-4 py-6 text-center text-[11.5px] text-muted-foreground",children:['0 fields match "',i.trim(),'"']})]}),p.unmappedNote&&(0,t.jsx)("p",{className:"border-t px-4 py-2.5 text-[11px] text-muted-foreground",children:p.unmappedNote})]})]})}var N=e.i(34822),N=N;let T=[{id:"pr-001",name:"workday-raas-delta-reader",category:"Connectors",version:"2.5.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:12,lastModified:"2026-07-18",code:`export const workdayRaasDeltaReader = createTool({
  id: "workday-raas-delta-reader",
  description: "Read rows from the INT_Worker_Delta custom report (Report-as-a-Service) since the stored cursor.",
  inputSchema: z.object({
    reportPath: z.string().default("ccx/service/customreport2/meridian/ISU_ONEWARD/INT_Worker_Delta"),
    lastFunctionallyUpdated: z.string().datetime().optional(),
  }),
  outputSchema: z.object({
    rows: z.array(z.object({
      employeeId: z.string(),
      positionId: z.string(),
      businessProcessType: z.string(),
      lastFunctionallyUpdated: z.string().datetime(),
    })),
    nextCursor: z.string().datetime(),
  }),
  execute: async ({ context }) =>
    workday.raas.get(context.reportPath, { format: "json", since: context.lastFunctionallyUpdated }),
});`},{id:"pr-002",name:"workday-worker-profile-reader",category:"Connectors",version:"1.7.0",origin:"Oneward Core, 2024-Q3",reuse:8,deps:[],dependents:9,lastModified:"2026-05-22",code:`export const workdayWorkerProfileReader = createTool({
  id: "workday-worker-profile-reader",
  description: "Read a worker snapshot via the Human_Resources SOAP service (Get_Workers with Employment and Organization response groups).",
  inputSchema: z.object({ employeeId: z.string() }),
  outputSchema: z.object({
    employeeId: z.string(), positionId: z.string(), businessTitle: z.string(),
    supervisoryOrg: z.string(), location: z.string(), workerActive: z.boolean(),
  }),
  execute: async ({ context }) =>
    workday.soap.humanResources.getWorkers({
      employeeId: context.employeeId,
      responseGroups: ["Employment_Data", "Organization_Data"],
    }),
});`},{id:"pr-003",name:"workday-comp-writeback",category:"Connectors",version:"3.0.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:["workday-worker-profile-reader"],dependents:7,lastModified:"2026-06-30",code:`export const workdayCompWriteback = createTool({
  id: "workday-comp-writeback",
  description: "Initiate Request_One_Time_Payment via the Compensation SOAP service. Starts the customer's own business process; never bypasses approvals.",
  inputSchema: z.object({
    employeeId: z.string(), oneTimePaymentPlanId: z.string(),
    amount: z.number(), currency: z.string().length(3), reasonReferenceId: z.string(),
  }),
  outputSchema: z.object({
    businessProcessEventId: z.string(),
    bpState: z.enum(["In Progress", "Successfully Completed"]),
  }),
  execute: async ({ context }) => workday.soap.compensation.requestOneTimePayment(context),
});`},{id:"pr-004",name:"workday-report-scheduler",category:"Connectors",version:"1.4.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:["workday-raas-delta-reader"],dependents:4,lastModified:"2026-03-14",code:`export const workdayReportScheduler = createTool({
  id: "workday-report-scheduler",
  description: "Register a recurring RaaS pull for a custom report and record its delivery window.",
  inputSchema: z.object({
    reportPath: z.string().default("ccx/service/customreport2/meridian/ISU_ONEWARD/INT_Worker_Delta"),
    cron: z.string(),
  }),
  outputSchema: z.object({ scheduleId: z.string(), nextRunAt: z.string().datetime() }),
  execute: async ({ context }) => scheduler.register(context.reportPath, context.cron),
});`},{id:"pr-005",name:"workday-bp-event-listener",category:"Connectors",version:"1.9.0",origin:"Meridian Group, 2026-Q1",reuse:7,deps:[],dependents:8,lastModified:"2026-07-25",code:`export const workdayBpEventListener = createTool({
  id: "workday-bp-event-listener",
  description: "Poll the INT_BP_Events custom report for business process events (hire, transfer, termination) and ack processed offsets.",
  inputSchema: z.object({ since: z.string().datetime() }),
  outputSchema: z.object({
    events: z.array(z.object({
      employeeId: z.string(), positionId: z.string(),
      businessProcessType: z.string(), initiatedAt: z.string().datetime(),
    })),
  }),
  execute: async ({ context }) =>
    workday.raas.get("ccx/service/customreport2/meridian/ISU_ONEWARD/INT_BP_Events", { format: "json", since: context.since }),
});`},{id:"pr-006",name:"workday-org-hierarchy-reader",category:"Connectors",version:"1.3.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:[],dependents:5,lastModified:"2026-04-19",code:`export const workdayOrgHierarchyReader = createTool({
  id: "workday-org-hierarchy-reader",
  description: "Read the supervisory org tree with effective dating (Get_Organizations, Human_Resources SOAP).",
  inputSchema: z.object({ topOrgId: z.string(), asOfDate: z.string() }),
  outputSchema: z.object({
    nodes: z.array(z.object({
      orgId: z.string(), parentOrgId: z.string().nullable(),
      managerEmployeeId: z.string(), subtype: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    workday.soap.humanResources.getOrganizations({ topOrgId: context.topOrgId, asOfEffectiveDate: context.asOfDate }),
});`},{id:"pr-007",name:"sf-odata-ec-jobinfo",category:"Connectors",version:"2.4.0",origin:"Harborview Systems, 2024-Q4",reuse:8,deps:[],dependents:10,lastModified:"2026-07-02",code:`export const sfOdataEcJobInfo = createTool({
  id: "sf-odata-ec-jobinfo",
  description: "Incremental read of Employee Central Job Information via OData v2 EmpJob.",
  inputSchema: z.object({ since: z.string().datetime() }),
  outputSchema: z.object({
    rows: z.array(z.object({
      userId: z.string(), company: z.string(), department: z.string(),
      jobCode: z.string(), eventReason: z.string(), lastModifiedDateTime: z.string().datetime(),
    })),
  }),
  execute: async ({ context }) =>
    sf.odata.get("/odata/v2/EmpJob", {
      $filter: \`lastModifiedDateTime gt datetimeoffset'\${context.since}'\`,
      $select: "userId,company,department,jobCode,eventReason,lastModifiedDateTime",
    }),
});`},{id:"pr-008",name:"sf-odata-ec-compinfo",category:"Connectors",version:"2.1.0",origin:"Harborview Systems, 2024-Q4",reuse:7,deps:[],dependents:8,lastModified:"2026-06-11",code:`export const sfOdataEcCompinfo = createTool({
  id: "sf-odata-ec-compinfo",
  description: "Read Employee Central recurring pay components via OData v2 EmpPayCompRecurring.",
  inputSchema: z.object({ userId: z.string() }),
  outputSchema: z.object({
    rows: z.array(z.object({
      userId: z.string(), payComponent: z.string(), paycompvalue: z.number(),
      currencyCode: z.string(), frequency: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    sf.odata.get("/odata/v2/EmpPayCompRecurring", {
      $filter: \`userId eq '\${context.userId}'\`,
      $select: "userId,payComponent,paycompvalue,currencyCode,frequency",
    }),
});`},{id:"pr-009",name:"sf-odata-foundation-reader",category:"Connectors",version:"1.5.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:[],dependents:6,lastModified:"2025-12-09",code:`export const sfOdataFoundationReader = createTool({
  id: "sf-odata-foundation-reader",
  description: "Read foundation objects (FOCompany, FODepartment, FOPayGroup) with external codes.",
  inputSchema: z.object({ objectType: z.enum(["FOCompany", "FODepartment", "FOPayGroup"]) }),
  outputSchema: z.object({
    records: z.array(z.object({ externalCode: z.string(), name: z.string(), status: z.string() })),
  }),
  execute: async ({ context }) =>
    sf.odata.get(\`/odata/v2/\${context.objectType}\`, { $select: "externalCode,name,status" }),
});`},{id:"pr-010",name:"sf-timeoff-balance-reader",category:"Connectors",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:[],dependents:7,lastModified:"2026-05-05",code:`export const sfTimeoffBalanceReader = createTool({
  id: "sf-timeoff-balance-reader",
  description: "Read EC Time Off account balances for one employee (TimeAccount with expanded details).",
  inputSchema: z.object({ userId: z.string(), timeAccountType: z.string().optional() }),
  outputSchema: z.object({
    balances: z.array(z.object({
      timeAccountType: z.string(), balance: z.number(), unit: z.string(), bookingEndDate: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    sf.odata.get("/odata/v2/TimeAccount", {
      $filter: \`userId eq '\${context.userId}'\`,
      $expand: "timeAccountDetails",
    }),
});`},{id:"pr-011",name:"sf-event-subscriber",category:"Connectors",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:3,deps:[],dependents:4,lastModified:"2026-07-24",code:`export const sfEventSubscriber = createTool({
  id: "sf-event-subscriber",
  description: "Subscribe to the Intelligent Services Employment Termination event (rule EVENT_TERM), registered through the Event Notification Subscription tool.",
  inputSchema: z.object({ callbackUrl: z.string().url() }),
  outputSchema: z.object({ subscriptionId: z.string(), status: z.enum(["ACTIVE", "PENDING"]) }),
  execute: async ({ context }) =>
    sf.ens.subscribe({ eventType: "Employment Termination", rule: "EVENT_TERM", endpoint: context.callbackUrl }),
});`},{id:"pr-012",name:"adp-payroll-input-batch",category:"Connectors",version:"3.1.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:[],dependents:9,lastModified:"2026-07-21",code:`export const adpPayrollInputBatch = createTool({
  id: "adp-payroll-input-batch",
  description: "Stage earnings and deduction entries through the API Central Payroll Input use case (pay-data-input.modify). Calls are mutually authenticated with the registered mTLS certificate; batches stay staged until payroll review.",
  inputSchema: z.object({
    payGroupCode: z.string(),
    payPeriodEndDate: z.string(),
    entries: z.array(z.object({
      associateOID: z.string(), earningCode: z.string(),
      hours: z.number().optional(), amount: z.number().optional(),
    })),
  }),
  outputSchema: z.object({ eventId: z.string(), status: z.literal("staged") }),
  execute: async ({ context }) =>
    adp.post("/events/payroll/v1/pay-data-input.modify", {
      payGroupCode: context.payGroupCode,
      payPeriodEndDate: context.payPeriodEndDate,
      entries: context.entries,
    }),
});`},{id:"pr-013",name:"adp-worker-demographic-sync",category:"Connectors",version:"2.3.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:[],dependents:6,lastModified:"2026-02-13",code:`export const adpWorkerDemographicSync = createTool({
  id: "adp-worker-demographic-sync",
  description: "Pull worker demographic changes from the event notification stream and ack processed messages.",
  inputSchema: z.object({ sinceMessageId: z.string().optional() }),
  outputSchema: z.object({
    changes: z.array(z.object({
      associateOID: z.string(), eventNameCode: z.string(),
      effectiveDate: z.string(), fieldPath: z.string(),
    })),
    lastMessageId: z.string(),
  }),
  execute: async ({ context }) =>
    adp.get("/core/v1/event-notification-messages", { since: context.sinceMessageId }),
});`},{id:"pr-014",name:"adp-gl-extract-reader",category:"Connectors",version:"1.6.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:[],dependents:5,lastModified:"2026-01-28",code:`export const adpGlExtractReader = createTool({
  id: "adp-gl-extract-reader",
  description: "Read general ledger movements for a closed pay period.",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
  outputSchema: z.object({
    lines: z.array(z.object({
      glAccount: z.string(), costCenter: z.string(), earningCode: z.string(), amount: z.number(),
    })),
  }),
  execute: async ({ context }) =>
    adp.get("/payroll/v1/general-ledger-movements", {
      payGroupCode: context.payGroupCode,
      payPeriodEndDate: context.payPeriodEndDate,
    }),
});`},{id:"pr-015",name:"adp-tax-profile-reader",category:"Connectors",version:"1.3.0",origin:"Beacon Logistics, 2025-Q1",reuse:5,deps:[],dependents:4,lastModified:"2025-11-17",code:`export const adpTaxProfileReader = createTool({
  id: "adp-tax-profile-reader",
  description: "Read worker tax jurisdictions and filing statuses.",
  inputSchema: z.object({ associateOID: z.string() }),
  outputSchema: z.object({
    jurisdictions: z.array(z.object({
      jurisdictionCode: z.string(), taxType: z.string(), filingStatus: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    adp.get(\`/payroll/v1/workers/\${context.associateOID}/tax-profiles\`),
});`},{id:"pr-016",name:"ukg-employee-changes-poller",category:"Connectors",version:"2.6.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:[],dependents:10,lastModified:"2026-07-29",code:`export const ukgEmployeeChangesPoller = createTool({
  id: "ukg-employee-changes-poller",
  description: "Poll GET /personnel/v1/employee-changes for a date window. On HTTP 429 the poller backs off per the Retry-After header and resumes the same window, so no change is skipped.",
  inputSchema: z.object({ startDate: z.string(), endDate: z.string(), page: z.number().default(1) }),
  outputSchema: z.object({
    changes: z.array(z.object({
      employeeId: z.string(), companyId: z.string(),
      changeType: z.string(), effectiveDate: z.string(),
    })),
    hasMore: z.boolean(),
  }),
  execute: async ({ context }) =>
    ukg.get("/personnel/v1/employee-changes", {
      startDate: context.startDate, endDate: context.endDate, page: context.page,
    }),
});`},{id:"pr-017",name:"ukg-timeclock-punch-stream",category:"Connectors",version:"2.0.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:[],dependents:6,lastModified:"2026-06-04",code:`export const ukgTimeclockPunchStream = createTool({
  id: "ukg-timeclock-punch-stream",
  description: "Read raw punch pairs for one employee across a date range.",
  inputSchema: z.object({ employeeId: z.string(), from: z.string(), to: z.string() }),
  outputSchema: z.object({
    punches: z.array(z.object({
      punchDateTime: z.string(), punchType: z.enum(["in", "out", "meal"]), clockId: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    ukg.get("/timemanagement/v1/punches", { employeeId: context.employeeId, from: context.from, to: context.to }),
});`},{id:"pr-018",name:"ukg-accrual-balance-reader",category:"Connectors",version:"1.5.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:[],dependents:7,lastModified:"2026-04-08",code:`export const ukgAccrualBalanceReader = createTool({
  id: "ukg-accrual-balance-reader",
  description: "Read accrual balances (PTO, sick, personal) with pending grants.",
  inputSchema: z.object({ employeeId: z.string() }),
  outputSchema: z.object({
    balances: z.array(z.object({
      accrualCode: z.string(), currentBalance: z.number(), pendingGrant: z.number(), unit: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    ukg.get("/personnel/v1/accrual-balances", { employeeId: context.employeeId }),
});`},{id:"pr-019",name:"ukg-schedule-reader",category:"Connectors",version:"1.2.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:[],dependents:3,lastModified:"2026-03-02",code:`export const ukgScheduleReader = createTool({
  id: "ukg-schedule-reader",
  description: "Read posted schedules for a location and week.",
  inputSchema: z.object({ locationId: z.string(), weekOf: z.string() }),
  outputSchema: z.object({
    shifts: z.array(z.object({
      employeeId: z.string(), shiftStart: z.string(), shiftEnd: z.string(), role: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    ukg.get("/scheduling/v1/schedules", { locationId: context.locationId, weekOf: context.weekOf }),
});`},{id:"pr-020",name:"greenhouse-harvest-client",category:"Connectors",version:"2.7.0",origin:"Crestline Foods, 2025-Q2",reuse:8,deps:[],dependents:9,lastModified:"2026-07-11",code:`export const greenhouseHarvestClient = createTool({
  id: "greenhouse-harvest-client",
  description: "Typed Harvest list reads (candidates, jobs, offers) with page and per_page paging.",
  inputSchema: z.object({
    resource: z.enum(["candidates", "jobs", "offers"]),
    page: z.number(), perPage: z.number().default(100),
  }),
  outputSchema: z.object({
    items: z.array(z.object({ id: z.number(), created_at: z.string(), updated_at: z.string() })),
    nextPage: z.number().nullable(),
  }),
  execute: async ({ context }) =>
    harvest.get(\`/v1/\${context.resource}\`, { page: context.page, per_page: context.perPage }),
});`},{id:"pr-021",name:"greenhouse-application-mover",category:"Connectors",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:4,deps:["greenhouse-harvest-client"],dependents:3,lastModified:"2026-07-22",code:`export const greenhouseApplicationMover = createTool({
  id: "greenhouse-application-mover",
  description: "Move a Greenhouse application to the next stage via Harvest. Requires the On-Behalf-Of header.",
  inputSchema: z.object({
    applicationId: z.number(), fromStageId: z.number(),
    toStageId: z.number(), onBehalfOfUserId: z.number(),
  }),
  outputSchema: z.object({ success: z.boolean() }),
  execute: async ({ context }) =>
    harvest.post(\`/v1/applications/\${context.applicationId}/move\`, {
      headers: { "On-Behalf-Of": String(context.onBehalfOfUserId) },
      body: { from_stage_id: context.fromStageId, to_stage_id: context.toStageId },
    }),
});`},{id:"pr-022",name:"greenhouse-webhook-receiver",category:"Connectors",version:"1.4.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:5,lastModified:"2026-05-30",code:`export const greenhouseWebhookReceiver = createTool({
  id: "greenhouse-webhook-receiver",
  description: "Verify the Signature header (HMAC SHA-256 with the shared secret) and normalize candidate stage change events.",
  inputSchema: z.object({ payload: z.string(), signatureHeader: z.string() }),
  outputSchema: z.object({
    verified: z.boolean(),
    event: z.object({
      action: z.string(), applicationId: z.number(),
      fromStageId: z.number().nullable(), toStageId: z.number().nullable(),
    }),
  }),
  execute: async ({ context }) => receiver.verifyAndParse(context.payload, context.signatureHeader),
});`},{id:"pr-023",name:"greenhouse-job-post-publisher",category:"Connectors",version:"1.6.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:4,lastModified:"2026-06-18",code:`export const greenhouseJobPostPublisher = createTool({
  id: "greenhouse-job-post-publisher",
  description: "Update a job post via Harvest PATCH /v1/job_posts/{id}. Requires the On-Behalf-Of header naming the acting Greenhouse user.",
  inputSchema: z.object({ jobPostId: z.number(), live: z.boolean(), onBehalfOfUserId: z.number() }),
  outputSchema: z.object({ success: z.boolean() }),
  execute: async ({ context }) =>
    harvest.patch(\`/v1/job_posts/\${context.jobPostId}\`, {
      headers: { "On-Behalf-Of": String(context.onBehalfOfUserId) },
      body: { status: context.live ? "live" : "offline" },
    }),
});`},{id:"pr-024",name:"okta-lifecycle-deactivate",category:"Connectors",version:"2.3.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:11,lastModified:"2026-07-08",code:`export const oktaLifecycleDeactivate = createTool({
  id: "okta-lifecycle-deactivate",
  description: "Deactivate a user through the Users API lifecycle operation. Sessions end with the transition; downstream app deprovisioning follows the app assignments.",
  inputSchema: z.object({ oktaUserId: z.string(), sendEmail: z.boolean().default(false) }),
  outputSchema: z.object({ status: z.literal("DEPROVISIONED"), transitionedAt: z.string().datetime() }),
  execute: async ({ context }) =>
    okta.post(\`/api/v1/users/\${context.oktaUserId}/lifecycle/deactivate\`, { sendEmail: context.sendEmail }),
});`},{id:"pr-025",name:"okta-scim-provisioner",category:"Connectors",version:"1.7.0",origin:"Oneward Core, 2024-Q3",reuse:7,deps:[],dependents:6,lastModified:"2026-05-14",code:`export const oktaScimProvisioner = createTool({
  id: "okta-scim-provisioner",
  description: "Provision downstream app accounts over SCIM 2.0 from an approved template.",
  inputSchema: z.object({ oktaUserId: z.string(), appIds: z.array(z.string()) }),
  outputSchema: z.object({ provisioned: z.array(z.string()), skipped: z.array(z.string()) }),
  execute: async ({ context }) => scim.provision(context.oktaUserId, context.appIds),
});`},{id:"pr-026",name:"okta-group-sync",category:"Connectors",version:"1.3.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:[],dependents:5,lastModified:"2026-03-25",code:`export const oktaGroupSync = createTool({
  id: "okta-group-sync",
  description: "Reconcile Okta group membership against HR attributes; dry run lists adds and removes before any write.",
  inputSchema: z.object({ groupId: z.string(), dryRun: z.boolean() }),
  outputSchema: z.object({ toAdd: z.array(z.string()), toRemove: z.array(z.string()) }),
  execute: async ({ context }) => {
    const members = await okta.get(\`/api/v1/groups/\${context.groupId}/users\`);
    return diffMembershipAgainstHr(members, { dryRun: context.dryRun });
  },
});`},{id:"pr-027",name:"msgraph-user-disable",category:"Connectors",version:"1.5.0",origin:"Oneward Core, 2024-Q3",reuse:7,deps:[],dependents:6,lastModified:"2026-06-09",code:`export const msgraphUserDisable = createTool({
  id: "msgraph-user-disable",
  description: "Disable sign-in (accountEnabled false), revoke refresh tokens, and record evidence of both calls.",
  inputSchema: z.object({ userPrincipalName: z.string(), termCaseId: z.string() }),
  outputSchema: z.object({ accountDisabled: z.boolean(), sessionsRevoked: z.boolean() }),
  execute: async ({ context }) => {
    await graph.patch(\`/v1.0/users/\${context.userPrincipalName}\`, { accountEnabled: false });
    await graph.post(\`/v1.0/users/\${context.userPrincipalName}/revokeSignInSessions\`);
    return evidence.record(context.termCaseId, ["accountEnabled=false", "revokeSignInSessions"]);
  },
});`},{id:"pr-028",name:"msgraph-calendar-reader",category:"Connectors",version:"1.2.0",origin:"Crestline Foods, 2025-Q2",reuse:4,deps:[],dependents:2,lastModified:"2025-10-21",code:`export const msgraphCalendarReader = createTool({
  id: "msgraph-calendar-reader",
  description: "Read free/busy windows for interviewer scheduling (getSchedule).",
  inputSchema: z.object({ userPrincipalNames: z.array(z.string()), from: z.string(), to: z.string() }),
  outputSchema: z.object({
    windows: z.array(z.object({
      userPrincipalName: z.string(), start: z.string(), end: z.string(), availability: z.string(),
    })),
  }),
  execute: async ({ context }) =>
    graph.post("/v1.0/users/scheduling/calendar/getSchedule", {
      schedules: context.userPrincipalNames,
      startTime: context.from,
      endTime: context.to,
    }),
});`},{id:"pr-029",name:"slack-events-bridge",category:"Connectors",version:"2.1.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:12,lastModified:"2026-07-26",code:`export const slackEventsBridge = createTool({
  id: "slack-events-bridge",
  description: "Bridge Slack app_mention and slash-command payloads into agent runs; replies post back with chat.postMessage on the same thread_ts.",
  inputSchema: z.object({
    eventType: z.enum(["app_mention", "slash_command"]),
    channelId: z.string(), threadTs: z.string().optional(), text: z.string(),
  }),
  outputSchema: z.object({ runId: z.string().nullable() }),
  execute: async ({ context }) => bridge.route(context),
});`},{id:"pr-030",name:"teams-adaptive-card-sender",category:"Connectors",version:"1.8.0",origin:"Meridian Group, 2026-Q1",reuse:7,deps:[],dependents:8,lastModified:"2026-07-15",code:`export const teamsAdaptiveCardSender = createTool({
  id: "teams-adaptive-card-sender",
  description: "Send an approval card to a Teams chat and await the button response.",
  inputSchema: z.object({ chatId: z.string(), cardJson: z.string() }),
  outputSchema: z.object({ messageId: z.string() }),
  execute: async ({ context }) =>
    graph.post(\`/v1.0/chats/\${context.chatId}/messages\`, {
      body: { contentType: "html", content: "<attachment id=\\"card1\\"></attachment>" },
      attachments: [{ id: "card1", contentType: "application/vnd.microsoft.card.adaptive", content: context.cardJson }],
    }),
});`},{id:"pr-031",name:"docusign-envelope-sender",category:"Connectors",version:"1.6.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:[],dependents:6,lastModified:"2026-06-23",code:`export const docusignEnvelopeSender = createTool({
  id: "docusign-envelope-sender",
  description: "Send a templated envelope and track signature status by recipient.",
  inputSchema: z.object({
    accountId: z.string(), templateId: z.string(),
    recipients: z.array(z.object({ email: z.string().email(), name: z.string(), roleName: z.string() })),
  }),
  outputSchema: z.object({ envelopeId: z.string(), status: z.string() }),
  execute: async ({ context }) =>
    docusign.post(\`/restapi/v2.1/accounts/\${context.accountId}/envelopes\`, {
      templateId: context.templateId,
      templateRoles: context.recipients,
      status: "sent",
    }),
});`},{id:"pr-032",name:"sftp-flat-file-gateway",category:"Connectors",version:"2.9.0",origin:"Oneward Core, 2024-Q3",reuse:8,deps:[],dependents:9,lastModified:"2026-02-06",code:`export const sftpFlatFileGateway = createTool({
  id: "sftp-flat-file-gateway",
  description: "Exchange fixed-width and CSV files with carriers and payroll bureaus; every transfer records a SHA-256 checksum.",
  inputSchema: z.object({ direction: z.enum(["push", "pull"]), remotePath: z.string() }),
  outputSchema: z.object({ files: z.array(z.string()), checksum: z.string() }),
  execute: async ({ context }) => sftp.exchange(context.direction, context.remotePath),
});`},{id:"pr-033",name:"snowflake-hr-mart-loader",category:"Connectors",version:"2.0.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:[],dependents:5,lastModified:"2026-04-30",code:`export const snowflakeHrMartLoader = createTool({
  id: "snowflake-hr-mart-loader",
  description: "Load staged files into the reporting mart with COPY INTO, idempotent by batch key.",
  inputSchema: z.object({ table: z.string(), batchKey: z.string(), stagePath: z.string() }),
  outputSchema: z.object({ rowsLoaded: z.number() }),
  execute: async ({ context }) =>
    snowflake.execute(\`COPY INTO \${context.table} FROM @hr_mart_stage/\${context.stagePath}\`, {
      batchKey: context.batchKey,
    }),
});`},{id:"pr-034",name:"s3-evidence-archiver",category:"Connectors",version:"1.4.0",origin:"Oneward Core, 2024-Q3",reuse:7,deps:[],dependents:8,lastModified:"2026-01-15",code:`export const s3EvidenceArchiver = createTool({
  id: "s3-evidence-archiver",
  description: "Write run evidence bundles to WORM storage with object lock retention.",
  inputSchema: z.object({ runId: z.string(), bundleJson: z.string(), retentionYears: z.number() }),
  outputSchema: z.object({ objectKey: z.string() }),
  execute: async ({ context }) =>
    s3.putObject({
      Key: \`evidence/\${context.runId}.json\`,
      Body: context.bundleJson,
      ObjectLockMode: "COMPLIANCE",
      RetentionYears: context.retentionYears,
    }),
});`},{id:"pr-035",name:"servicenow-hr-case-bridge",category:"Connectors",version:"1.3.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:[],dependents:3,lastModified:"2026-05-08",code:`export const servicenowHrCaseBridge = createTool({
  id: "servicenow-hr-case-bridge",
  description: "Open, update, and close HR cases (sn_hr_core) from agent runs with linked evidence.",
  inputSchema: z.object({
    action: z.enum(["open", "update", "close"]),
    caseId: z.string().optional(), shortDescription: z.string().optional(),
  }),
  outputSchema: z.object({ caseId: z.string(), state: z.string() }),
  execute: async ({ context }) =>
    context.action === "open"
      ? snow.post("/api/sn_hr_core/case", { short_description: context.shortDescription })
      : snow.patch(\`/api/sn_hr_core/case/\${context.caseId}\`, { state: context.action === "close" ? "Closed" : "Open" }),
});`},{id:"pr-036",name:"carrier-834-eligibility-feed",category:"Connectors",version:"2.2.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["sftp-flat-file-gateway"],dependents:4,lastModified:"2026-03-19",code:`export const carrier834EligibilityFeed = createTool({
  id: "carrier-834-eligibility-feed",
  description: "Build and stage an 834 enrollment file per the carrier companion guide.",
  inputSchema: z.object({ carrierId: z.string(), coveragePeriod: z.string() }),
  outputSchema: z.object({ fileId: z.string(), memberCount: z.number(), checksum: z.string() }),
  execute: async ({ context }) => edi.build834(context.carrierId, context.coveragePeriod),
});`},{id:"pr-037",name:"smtp-notice-mailer",category:"Connectors",version:"1.9.0",origin:"Oneward Core, 2024-Q3",reuse:7,deps:[],dependents:7,lastModified:"2025-12-02",code:`export const smtpNoticeMailer = createTool({
  id: "smtp-notice-mailer",
  description: "Send compliance notices from approved templates and log delivery receipts.",
  inputSchema: z.object({
    templateId: z.string(), to: z.string().email(),
    mergeFields: z.array(z.object({ field: z.string(), value: z.string() })),
  }),
  outputSchema: z.object({ messageId: z.string(), sentAt: z.string().datetime() }),
  execute: async ({ context }) => mailer.send(context.templateId, context.to, context.mergeFields),
});`},{id:"pr-038",name:"oracle-atom-newhire-poller",category:"Connectors",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:2,deps:[],dependents:2,lastModified:"2026-07-19",code:`export const oracleAtomNewhirePoller = createTool({
  id: "oracle-atom-newhire-poller",
  description: "Poll the Oracle HCM Atom feed for new hires (employee/newhire collection) since the updated-min watermark.",
  inputSchema: z.object({ updatedMin: z.string().datetime() }),
  outputSchema: z.object({
    entries: z.array(z.object({
      personId: z.string(), personNumber: z.string(),
      legalEntityId: z.string(), effectiveStartDate: z.string(),
    })),
    nextUpdatedMin: z.string().datetime(),
  }),
  execute: async ({ context }) =>
    oracle.get("/hcmCoreApi/atomservlet/employee/newhire", { "updated-min": context.updatedMin }),
});`},{id:"pr-039",name:"lever-opportunity-reader",category:"Connectors",version:"1.0.1",origin:"Oneward Core, 2026-Q2",reuse:2,deps:[],dependents:1,lastModified:"2026-07-10",code:`export const leverOpportunityReader = createTool({
  id: "lever-opportunity-reader",
  description: "Incremental read of Lever opportunities with stage expansion.",
  inputSchema: z.object({ updatedAtStart: z.number() }),
  outputSchema: z.object({
    opportunities: z.array(z.object({
      id: z.string(), stage: z.string(), postingId: z.string(), updatedAt: z.number(),
    })),
    next: z.string().nullable(),
  }),
  execute: async ({ context }) =>
    lever.get("/v1/opportunities", { updated_at_start: context.updatedAtStart, expand: "stage" }),
});`},{id:"pr-040",name:"paylocity-employee-sync",category:"Connectors",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:2,deps:[],dependents:1,lastModified:"2026-06-28",code:`export const paylocityEmployeeSync = createTool({
  id: "paylocity-employee-sync",
  description: "Page through company employees for the nightly reconciliation snapshot.",
  inputSchema: z.object({ companyId: z.string(), page: z.number().default(0) }),
  outputSchema: z.object({
    employees: z.array(z.object({
      employeeId: z.string(), statusCode: z.string(), positionCode: z.string(), hireDate: z.string(),
    })),
    hasMore: z.boolean(),
  }),
  execute: async ({ context }) =>
    paylocity.get(\`/api/v2/companies/\${context.companyId}/employees\`, { pagesize: 100, pagenumber: context.page }),
});`},{id:"pr-041",name:"adaptive-planning-headcount-export",category:"Connectors",version:"1.1.0",origin:"Meridian Group, 2026-Q1",reuse:3,deps:[],dependents:2,lastModified:"2026-05-20",code:`export const adaptivePlanningHeadcountExport = createTool({
  id: "adaptive-planning-headcount-export",
  description: "Export the Headcount sheet from Workday Adaptive Planning (exportData API) for a version and level.",
  inputSchema: z.object({ version: z.string(), level: z.string() }),
  outputSchema: z.object({
    rows: z.array(z.object({
      level: z.string(), account: z.string(), month: z.string(), value: z.number(),
    })),
  }),
  execute: async ({ context }) =>
    adaptive.exportData({ sheet: "Headcount", version: context.version, level: context.level }),
});`},{id:"pr-042",name:"leave-eligibility-evaluator",category:"Agent tools",version:"3.1.0",origin:"Northline Health, 2025-Q3",reuse:9,deps:["sf-timeoff-balance-reader","ps-fmla"],dependents:11,lastModified:"2026-07-30",mechanism:"Runs the FMLA 12-month and 1,250-hour tests plus each state program's own thresholds against HCM and timeclock data, returning a per-program verdict with the governing pack citation.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"leaveType",type:"string",constraints:"enum: bonding|medical|caregiver|pregnancy|military",dir:"in"},{field:"asOf",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"eligible[]",type:"ProgramResult[]",constraints:"one row per program: id, verdict, reason, packId",dir:"out"},{field:"citations[]",type:"string[]",constraints:"pack id + section, min 1 per eligible program",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Worker (Get)"},{connector:"SAP SuccessFactors",scope:"Manage Time Off (RBP)"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["Missing wage or hours history returns an insufficient-data verdict for that program, never a guess; the run names the missing object.","State without a Policy Library leave pack routes to human review with a coverage-gap note.","Pack superseded mid-run: the call aborts, re-resolves the current version, and retries once."],changelog:[{version:"2.6.2",date:"2026-03-02",note:"Fixed lookback boundary when the leave start lands on a pay period edge."},{version:"3.0.0",date:"2026-05-18",note:"Every program verdict now carries pack id and effective date; callers stopped joining citations separately."},{version:"3.1.0",date:"2026-07-30",note:"Added MN Paid Leave and DE PFML registry entries ahead of 2026 benefit starts."}],usedBy:["ag-leave","ag-helpdesk"],tests:"31 unit cases; covered by the es-leave regression suite",code:`const STATE = z.enum(["CA", "NY", "TX", "WA", "CO", "IL", "NJ", "MA", "FL", "GA"]);

export const leaveEligibilityEvaluator = createTool({
  id: "leave-eligibility-evaluator",
  description: "Evaluate FMLA and state program eligibility from hours, tenure, and worksite.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    state: STATE,
    leaveType: z.enum(["bonding", "medical", "caregiver", "pregnancy", "military"]),
    asOf: z.string().date(),
  }),
  outputSchema: z.object({
    eligible: z.array(programResultSchema),
    citations: z.array(z.string()).min(1),
  }),
  execute: async ({ context }) => {
    const packs = await library.resolve(context.state, "leave");
    if (packs.packIds.length === 0) return escalate("coverage-gap", context.state);
    const hours = await countLookbackHours(context.employeeId, context.asOf);
    if (hours.source === "missing") return insufficientData("hours", context.employeeId);
    const worker = await workday.soap.humanResources.getWorkers({ employeeId: context.employeeId });
    return evaluatePrograms({ worker, hours, packs, leaveType: context.leaveType });
  },
});`},{id:"pr-043",name:"fmla-hours-counter",category:"Agent tools",version:"2.4.0",origin:"Northline Health, 2025-Q3",reuse:8,deps:["ukg-timeclock-punch-stream"],dependents:9,lastModified:"2026-07-19",mechanism:"Pairs UKG punches across the 365 days before the leave start, sums worked hours excluding unpaid leave per 29 CFR 825.110, and tests the total against the 1,250-hour threshold.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"asOf",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"hours",type:"number",constraints:"decimal(7,2), >= 0",dir:"out"},{field:"meetsThreshold",type:"boolean",constraints:"true when hours >= 1250",dir:"out"},{field:"lookbackStart",type:"string",constraints:"ISO 8601 date, asOf minus 365 days",dir:"out"},{field:"gaps[]",type:"object[]",constraints:"weeks with no punches: weekOf, reason",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Time Management: punches (Get)"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["No UKG punches in the window routes to manual count instead of returning zero hours.","HTTP 429: backs off per Retry-After and resumes the same date window, so no punch is skipped.","Punch gaps longer than 14 days emit a gaps[] entry rather than interpolating."],changelog:[{version:"2.0.0",date:"2025-11-06",note:"Rewrote the pairing pass to handle overnight shifts that split at midnight."},{version:"2.3.0",date:"2026-04-10",note:"Added per-week gap reporting for specialist review."},{version:"2.4.0",date:"2026-07-19",note:"Excluded unpaid suspension hours per DOL opinion letter FMLA2023-1-A."}],usedBy:["ag-leave"],tests:"22 unit cases; covered by the es-leave regression suite",code:`export const fmlaHoursCounter = createTool({
  id: "fmla-hours-counter",
  description: "Count hours worked in the 12 month lookback, per the 1,250 hour test.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    asOf: z.string().date(),
  }),
  outputSchema: z.object({
    hours: z.number().nonnegative(),
    meetsThreshold: z.boolean(),
    lookbackStart: z.string().date(),
    gaps: z.array(z.object({ weekOf: z.string().date(), reason: z.string() })),
  }),
  execute: async ({ context }) => {
    const lookbackStart = shiftDays(context.asOf, -365);
    const punches = await ukg.get("/timemanagement/v1/punches", {
      employeeId: context.employeeId, from: lookbackStart, to: context.asOf,
    });
    if (punches.length === 0) return manualCountEscalation(context.employeeId, "no UKG punches in window");
    const paired = pairPunches(punches, { splitOvernightAtMidnight: true });
    const hours = round2(sumWorkedHours(paired, { excludeUnpaid: true }));
    return { hours, meetsThreshold: hours >= 1250, lookbackStart, gaps: findGaps(paired, 14) };
  },
});`},{id:"pr-044",name:"state-leave-sequencer",category:"Agent tools",version:"2.2.1",origin:"Northline Health, 2025-Q3",reuse:8,deps:["leave-eligibility-evaluator"],dependents:8,lastModified:"2026-07-22",mechanism:"Orders eligible federal, state, and employer programs into dated segments by protection type and pay source, marking which draw down concurrently and where entitlement gaps open.",schema:[{field:"eligibility[]",type:"ProgramResult[]",constraints:"min 1, rows from leave-eligibility-evaluator",dir:"in"},{field:"startDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"segments[]",type:"Segment[]",constraints:"label, weeks decimal(4,1), pay, protection enum: job-protected|pay-only|gap, sourceId",dir:"out"},{field:"totalWeeks",type:"number",constraints:"decimal(4,1), sum of non-concurrent segments",dir:"out"},{field:"concurrency[]",type:"[string, string][]",constraints:"program pairs that run in parallel",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: leave (read, current versions)"}],failure:["Packs that disagree on concurrency produce a conflict segment and route the plan to specialist review.","Start date more than 90 days out returns a provisional plan stamped for re-sequencing at T-30.","Missing benefit formula for a paid program leaves pay blank and flags the segment, never estimates silently."],changelog:[{version:"2.1.0",date:"2026-04-02",note:"Segments carry the governing sourceId so the timeline UI can cite per segment."},{version:"2.2.0",date:"2026-06-08",note:"Added employer supplement segments sourced from SPD packs."},{version:"2.2.1",date:"2026-07-22",note:"CFRA now sequences after PDL exhaustion when the leave reason is pregnancy disability."}],usedBy:["ag-leave"],tests:"19 unit cases; covered by the es-leave regression suite",code:`export const stateLeaveSequencer = createTool({
  id: "state-leave-sequencer",
  description: "Sequence federal, state, and employer leave into ordered segments with pay and protection.",
  inputSchema: z.object({
    eligibility: z.array(programResultSchema).min(1),
    startDate: z.string().date(),
  }),
  outputSchema: z.object({
    segments: z.array(z.object({
      label: z.string(),
      weeks: z.number().positive(),
      pay: z.string(),
      protection: z.enum(["job-protected", "pay-only", "gap"]),
      sourceId: z.string(),
    })),
    totalWeeks: z.number(),
    concurrency: z.array(z.tuple([z.string(), z.string()])),
  }),
  execute: async ({ context }) => {
    const rules = await packs.concurrencyRules(context.eligibility.map((e) => e.packId));
    if (rules.conflicts.length > 0) return specialistReview(rules.conflicts);
    const ordered = orderByProtection(context.eligibility, rules);
    return datedSegments(ordered, context.startDate);
  },
});`},{id:"pr-045",name:"leave-concurrency-mapper",category:"Agent tools",version:"1.6.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-fmla","ps-ca-leave"],dependents:6,lastModified:"2026-06-25",mechanism:"Reads concurrency rules out of the governing packs and returns which program pairs draw down together in the given state, so 12 FMLA weeks are never double-counted.",schema:[{field:"programs[]",type:"string[]",constraints:"min 2, pack ids matching ^(ps|pk)-[a-z0-9-]+$",dir:"in"},{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"concurrent[]",type:"[string, string][]",constraints:"pairs that draw down together",dir:"out"},{field:"consecutive[]",type:"[string, string][]",constraints:"pairs that must sequence",dir:"out"},{field:"rationale[]",type:"object[]",constraints:"pair + pack citation per decision",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: leave (read, current versions)"}],failure:["Unknown program id rejects the call before any pack read.","States with no explicit concurrency rule fall back to the federal-only mapping and mark the result partial."],changelog:[{version:"1.0.0",date:"2025-09-24",note:"Extracted from the Northline leave engagement."},{version:"1.5.0",date:"2026-03-12",note:"Each pair now returns a rationale citation."},{version:"1.6.0",date:"2026-06-25",note:"CO FAMLI and WA PFML pairings updated for 2026 rule text."}],usedBy:["ag-leave"],tests:"16 unit cases; covered by the es-leave regression suite",code:`export const leaveConcurrencyMapper = createTool({
  id: "leave-concurrency-mapper",
  description: "Mark which programs run concurrently vs consecutively for a plan, from the governing policy packs.",
  inputSchema: z.object({
    programs: z.array(z.string().regex(/^(ps|pk)-[a-z0-9-]+$/)).min(2),
    state: z.enum(["CA", "NY", "TX", "WA", "CO", "IL", "NJ", "MA", "FL", "GA"]),
  }),
  outputSchema: z.object({
    concurrent: z.array(z.tuple([z.string(), z.string()])),
    consecutive: z.array(z.tuple([z.string(), z.string()])),
    rationale: z.array(z.object({ pair: z.string(), citation: z.string() })),
  }),
  execute: async ({ context }) => {
    const known = await packs.exist(context.programs);
    if (known.missing.length > 0) throw badRequest("unknown program ids: " + known.missing.join(", "));
    const rules = await packs.concurrencyRules(context.programs, context.state);
    if (!rules.stateRule) return federalOnlyMapping(context.programs, { partial: true });
    return mapPairs(context.programs, rules);
  },
});`},{id:"pr-046",name:"intermittent-leave-tracker",category:"Agent tools",version:"1.4.2",origin:"Northline Health, 2025-Q3",reuse:6,deps:["ukg-timeclock-punch-stream","fmla-hours-counter"],dependents:5,lastModified:"2026-05-27",mechanism:"Books each intermittent absence against the plan in the employer's smallest increment (15 minutes at Meridian), recomputes remaining entitlement, and projects exhaustion from the trailing 8-week usage rate.",schema:[{field:"planId",type:"string",constraints:"pattern: ^lp-[a-z0-9-]+$",dir:"in"},{field:"usedHours",type:"number",constraints:"decimal(6,2), 15-minute increments",dir:"out"},{field:"remainingHours",type:"number",constraints:"decimal(6,2), >= 0",dir:"out"},{field:"exhaustionDate",type:"string",constraints:"ISO 8601 date, projected",dir:"out"},{field:"increments[]",type:"object[]",constraints:"date, hours, source punch pair id",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Time Management: punches (Get)"}],failure:["Punch pair missing an out-punch books nothing and flags the day for timekeeper correction.","HTTP 429 from UKG backs off per Retry-After; the booking window resumes intact.","Usage that would exceed remaining entitlement books the remainder and routes the overage to the specialist."],changelog:[{version:"1.0.0",date:"2025-10-08",note:"Extracted from the Northline intermittent tracking build."},{version:"1.4.0",date:"2026-03-25",note:"Projection switched to trailing 8-week usage instead of calendar average."},{version:"1.4.2",date:"2026-05-27",note:"Fixed 15-minute rounding that understated usage by up to 0.25 hour per week."}],usedBy:["ag-leave"],tests:"18 unit cases; covered by the es-leave regression suite",code:`export const intermittentLeaveTracker = createTool({
  id: "intermittent-leave-tracker",
  description: "Track intermittent usage in smallest increments and project exhaustion.",
  inputSchema: z.object({ planId: z.string() }),
  outputSchema: z.object({ usedHours: z.number(), remainingHours: z.number(), exhaustionDate: z.string() }),
  execute: async ({ context }) => trackIntermittent(context.planId),
});`},{id:"pr-047",name:"state-benefit-estimator",category:"Agent tools",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-wa-pfml"],dependents:6,lastModified:"2026-07-06",mechanism:"Applies the current state formula (WA PFML 90/50 split at half the state average weekly wage, CA SDI and PFL wage bands) to the employee's quarterly wage history and returns the weekly benefit with the formula version.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"program",type:"string",constraints:"enum: wa-pfml|ca-sdi|ca-pfl|ny-pfl|ma-pfml|co-famli|nj-fli",dir:"in"},{field:"claimEffectiveDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"weeklyBenefitCents",type:"number",constraints:"integer cents, USD",dir:"out"},{field:"weeklyCapCents",type:"number",constraints:"integer cents, USD, per formula year",dir:"out"},{field:"formulaVersion",type:"string",constraints:"e.g. wa-pfml-2026.1",dir:"out"},{field:"quartersUsed[]",type:"string[]",constraints:"base-period quarters, e.g. 2025-Q4",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"API Central use case: Payroll Output (read)"},{connector:"Policy Library",scope:"Packs: leave benefit formulas (read)"}],failure:["Fewer than 4 complete base-period quarters returns no estimate and lists the missing quarters.","Formula superseded by a mid-year rate change recomputes from the claim effective date, not the request date.","Program not yet live for the state rejects with the go-live date."],changelog:[{version:"1.0.0",date:"2025-09-17",note:"Extracted from the Northline WA PFML build."},{version:"1.7.0",date:"2026-04-21",note:"Added CO FAMLI and MA PFML formulas."},{version:"1.8.0",date:"2026-07-06",note:"2026 WA weekly cap and CA wage-band changes under SB 951."}],usedBy:["ag-leave","ag-helpdesk"],tests:"17 unit cases; covered by the es-leave regression suite",code:`const PROGRAM = z.enum(["wa-pfml", "ca-sdi", "ca-pfl", "ny-pfl", "ma-pfml", "co-famli", "nj-fli"]);

export const stateBenefitEstimator = createTool({
  id: "state-benefit-estimator",
  description: "Estimate the weekly state benefit from wage history and the current benefit formula.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    program: PROGRAM,
    claimEffectiveDate: z.string().date(),
  }),
  outputSchema: z.object({
    weeklyBenefitCents: z.number().int().nonnegative(),
    weeklyCapCents: z.number().int().positive(),
    formulaVersion: z.string(),
    quartersUsed: z.array(z.string()),
  }),
  execute: async ({ context }) => {
    const formula = await formulas.current(context.program, context.claimEffectiveDate);
    if (!formula.live) throw notLive(context.program, formula.goLiveDate);
    const wages = await adp.get("/payroll/v1/workers/" + context.employeeId + "/pay-statements");
    const quarters = completeQuarters(wages, 4);
    if (quarters.length < 4) return missingWageHistory(context.employeeId, quarters);
    return applyFormula(formula, quarters);
  },
});`},{id:"pr-048",name:"return-to-work-scheduler",category:"Agent tools",version:"1.3.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:["ukg-schedule-reader"],dependents:4,lastModified:"2026-04-15",mechanism:"Proposes a return date from the medical clearance and plan end, checks it against posted UKG schedules for conflicts, and notifies the schedule owner and manager with the draft.",schema:[{field:"planId",type:"string",constraints:"pattern: ^lp-[a-z0-9-]+$",dir:"in"},{field:"clearedDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"proposedReturn",type:"string",constraints:"ISO 8601 date, >= clearedDate",dir:"out"},{field:"conflicts[]",type:"object[]",constraints:"posted shifts inside the leave window",dir:"out"},{field:"notified[]",type:"string[]",constraints:"recipient worker ids",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Scheduling: schedules (Get)"},{connector:"Slack",scope:"chat:write"}],failure:["Clearance date before plan end routes to the LOA specialist instead of shortening the plan.","No posted schedule for the return week sends the scheduler a hold instead of proposing a shift."],changelog:[{version:"1.0.0",date:"2025-10-14",note:"Extracted from the Northline RTW flow."},{version:"1.2.0",date:"2026-02-06",note:"Restricted-duty clearances now open a task in the accommodation queue."},{version:"1.3.0",date:"2026-04-15",note:"Manager notification moved to a Slack DM with the plan link."}],usedBy:["ag-leave","ag-manager"],tests:"12 unit cases; covered by the es-leave regression suite",code:`export const returnToWorkScheduler = createTool({
  id: "return-to-work-scheduler",
  description: "Draft a return date and notify the schedule owner, respecting posted shifts.",
  inputSchema: z.object({ planId: z.string(), clearedDate: z.string() }),
  outputSchema: z.object({ proposedReturn: z.string(), notified: z.array(z.string()) }),
  execute: async ({ context }) => scheduleReturn(context.planId, context.clearedDate),
});`},{id:"pr-049",name:"ada-accommodation-flagger",category:"Agent tools",version:"1.2.1",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["pk-fed-ada"],dependents:3,lastModified:"2026-06-01",mechanism:"Screens request text against the ADA pack's trigger taxonomy and flags cases for the interactive process; it classifies language only and never interprets medical conditions.",schema:[{field:"requestText",type:"string",constraints:"1-4000 chars, PII-redacted upstream",dir:"in"},{field:"flag",type:"boolean",constraints:"true opens an interactive-process task",dir:"out"},{field:"reason",type:"string",constraints:"taxonomy category + matched phrase",dir:"out"},{field:"confidence",type:"number",constraints:"decimal 0-1; below 0.7 routes to human",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: pk-fed-ada (read)"}],failure:["Confidence below 0.7 flags for human triage instead of asserting either way.","Text containing an explicit diagnosis is masked before logging; only the taxonomy category is stored."],changelog:[{version:"1.0.0",date:"2026-02-12",note:"Built for the Meridian leave intake."},{version:"1.2.0",date:"2026-04-30",note:"Taxonomy expanded with religious accommodation phrasing."},{version:"1.2.1",date:"2026-06-01",note:"Stopped flagging ergonomic equipment requests already covered by facilities policy."}],usedBy:["ag-leave","ag-helpdesk"],tests:"14 unit cases; covered by the es-leave regression suite",code:`export const adaAccommodationFlagger = createTool({
  id: "ada-accommodation-flagger",
  description: "Flag leave requests that may trigger the interactive process. Never diagnoses.",
  inputSchema: z.object({ requestText: z.string() }),
  outputSchema: z.object({ flag: z.boolean(), reason: z.string() }),
  execute: async ({ context }) => flagAccommodation(context.requestText),
});`},{id:"pr-050",name:"leave-balance-projector",category:"Agent tools",version:"1.5.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["ukg-accrual-balance-reader"],dependents:5,lastModified:"2026-05-20",mechanism:"Projects each accrual balance to a target date by replaying scheduled grants, carryover caps, and approved future time off from UKG.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"targetDate",type:"string",constraints:"ISO 8601 date, <= 365 days out",dir:"in"},{field:"projected[]",type:"object[]",constraints:"accrualCode, projectedHours decimal(6,2), capApplied",dir:"out"},{field:"forfeitedHours",type:"number",constraints:"decimal(6,2), carryover losses at plan-year boundary",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Personnel: accrual balances (Get)"}],failure:["Accrual plan without a grant schedule returns the current balance marked static.","Target date past the plan-year boundary applies carryover caps and itemizes forfeited hours."],changelog:[{version:"1.0.0",date:"2025-10-02",note:"Extracted from the Northline balance projections."},{version:"1.4.0",date:"2026-02-18",note:"Approved future PTO now included in the projection."},{version:"1.5.0",date:"2026-05-20",note:"Carryover forfeiture itemized per accrual code."}],usedBy:["ag-leave","ag-manager"],tests:"13 unit cases; covered by the es-leave regression suite",code:`export const leaveBalanceProjector = createTool({
  id: "leave-balance-projector",
  description: "Project accrual balances at a future date including scheduled grants.",
  inputSchema: z.object({ employeeId: z.string(), targetDate: z.string() }),
  outputSchema: z.object({ projected: z.array(accrualSchema) }),
  execute: async ({ context }) => projectBalances(context.employeeId, context.targetDate),
});`},{id:"pr-051",name:"variance-explainer",category:"Agent tools",version:"2.7.0",origin:"Harborview Systems, 2024-Q4",reuse:9,deps:["adp-gl-extract-reader"],dependents:10,lastModified:"2026-07-27",mechanism:"Decomposes a period-over-period payroll delta into staffing, rate, hours, and one-time drivers by joining GL movements against HCM change events, then emits a narrative with an amount per driver.",schema:[{field:"payGroupCode",type:"string",constraints:"pattern: ^US-BW-[0-9]{2}$",dir:"in"},{field:"payPeriodEndDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"thresholdCents",type:"number",constraints:"integer cents, USD, > 0",dir:"in"},{field:"drivers[]",type:"Driver[]",constraints:"kind enum: staffing|rate|hours|one-time; signed amountCents; evidence event ids",dir:"out"},{field:"residualCents",type:"number",constraints:"signed integer cents, unexplained remainder",dir:"out"},{field:"narrative",type:"string",constraints:"every driver amount cited to evidence",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"API Central use case: General Ledger (read)"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["Residual above 0.5% of gross stays flagged unexplained; the tool never force-allocates the remainder.","GL extract not yet posted returns retry-after with the ADP posting ETA.","HTTP 429 from ADP: exponential backoff, max 5 tries, then the run parks as blocked."],changelog:[{version:"2.5.0",date:"2026-03-19",note:"Driver evidence now links the exact HCM change events."},{version:"2.6.0",date:"2026-05-28",note:"Added the one-time driver class for retro and bonus codes."},{version:"2.7.0",date:"2026-07-27",note:"Residual reporting switched to basis points of gross."}],usedBy:["ag-payroll-audit"],tests:"27 unit cases; covered by the es-payroll regression suite",code:`export const varianceExplainer = createTool({
  id: "variance-explainer",
  description: "Explain a payroll variance by decomposing it into staffing, rate, and hours drivers.",
  inputSchema: z.object({
    payGroupCode: z.string().regex(/^US-BW-[0-9]{2}$/),
    payPeriodEndDate: z.string().date(),
    thresholdCents: z.number().int().positive(),
  }),
  outputSchema: z.object({
    drivers: z.array(z.object({
      kind: z.enum(["staffing", "rate", "hours", "one-time"]),
      amountCents: z.number().int(),
      evidence: z.array(z.string()),
    })),
    residualCents: z.number().int(),
    narrative: z.string(),
  }),
  execute: async ({ context }) => {
    const gl = await adp.get("/payroll/v1/general-ledger-movements", context);
    if (gl.status === "not-posted") return retryAfter(gl.expectedPostingAt);
    const events = await changes.forPeriod(context.payGroupCode, context.payPeriodEndDate);
    const result = attributeDrivers(gl.lines, events, context.thresholdCents);
    if (Math.abs(result.residualCents) > result.grossCents * 0.005) flagUnexplained(result);
    return result.withNarrative();
  },
});`},{id:"pr-052",name:"payroll-variance-detector",category:"Agent tools",version:"2.5.1",origin:"Harborview Systems, 2024-Q4",reuse:8,deps:["adp-payroll-input-batch"],dependents:9,lastModified:"2026-07-24",mechanism:"Compares every staged pay-data entry against the worker's prior 6-period baseline per earning code and flags deltas beyond the tolerance band before the batch releases.",schema:[{field:"batchId",type:"string",constraints:"pattern: ^pb-[0-9]{6}$",dir:"in"},{field:"tolerancePct",type:"number",constraints:"decimal, 0.5 to 25.0",dir:"in"},{field:"flags[]",type:"VarianceFlag[]",constraints:"associateOID, earningCode, priorCents, stagedCents, deltaPct",dir:"out"},{field:"scanned",type:"number",constraints:"integer, entries examined",dir:"out"},{field:"baselinePeriods",type:"number",constraints:"integer, 6 unless history is shorter",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"Payroll Input (pay-data batches: earnings, deductions, reimbursements)"}],failure:["Workers with fewer than 3 baseline periods score against the pay-group median instead of their own history.","Zero-amount staged entries for active workers flag as missing-input, a separate class from variance.","HTTP 429 from ADP: backoff per Retry-After; the scan resumes at the last processed entry."],changelog:[{version:"2.0.0",date:"2025-08-15",note:"Baseline moved from 3 to 6 periods."},{version:"2.5.0",date:"2026-06-02",note:"Added missing-input detection for active workers with no staged entry."},{version:"2.5.1",date:"2026-07-24",note:"Fixed tolerance rounding for sub-dollar earning codes."}],usedBy:["ag-payroll-audit"],tests:"34 unit cases; covered by the es-payroll regression suite",code:`export const payrollVarianceDetector = createTool({
  id: "payroll-variance-detector",
  description: "Compare staged payroll against the prior period and flag out-of-band deltas.",
  inputSchema: z.object({
    batchId: z.string().regex(/^pb-[0-9]{6}$/),
    tolerancePct: z.number().min(0.5).max(25),
  }),
  outputSchema: z.object({
    flags: z.array(z.object({
      associateOID: z.string(),
      earningCode: z.string(),
      priorCents: z.number().int(),
      stagedCents: z.number().int(),
      deltaPct: z.number(),
    })),
    scanned: z.number().int(),
    baselinePeriods: z.number().int(),
  }),
  execute: async ({ context }) => {
    const staged = await adp.get("/events/payroll/v1/pay-data-input/" + context.batchId);
    if (staged.entries.length === 0) throw emptyBatch(context.batchId);
    const baseline = await history.perWorker(staged.payGroupCode, { periods: 6 });
    const flags = compareAgainstBaseline(staged.entries, baseline, context.tolerancePct);
    return { flags: [...flags, ...findMissingInputs(staged, baseline)], scanned: staged.entries.length, baselinePeriods: 6 };
  },
});`},{id:"pr-053",name:"retro-pay-calculator",category:"Agent tools",version:"1.7.0",origin:"Harborview Systems, 2024-Q4",reuse:7,deps:["adp-payroll-input-batch"],dependents:5,lastModified:"2026-06-13",mechanism:"Recomputes each closed period between a late effective-dated change and today, diffs old versus new gross per period, and stages the sum as a RETRO earning entry.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"changeId",type:"string",constraints:"HCM change event, pattern: ^ce-[0-9]{7}$",dir:"in"},{field:"amountCents",type:"number",constraints:"signed integer cents, USD",dir:"out"},{field:"periods[]",type:"object[]",constraints:"payPeriodEndDate + deltaCents per closed period",dir:"out"},{field:"earningCode",type:"string",constraints:"always RETRO",dir:"out"},{field:"staged",type:"boolean",constraints:"false when routed for manual handling",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"Payroll Input (pay-data batches: earnings, deductions, reimbursements)"},{connector:"Workday",scope:"Worker Data: Historical Staffing Information (Get)"}],failure:["Changes older than 8 closed periods route to payroll ops for manual recalculation per the SOX boundary.","A second retro for the same change id dedupes to the earlier draft and reports the conflict.","Negative retro (overpayment) never auto-stages; it drafts a recovery plan for approval."],changelog:[{version:"1.0.0",date:"2025-01-22",note:"Extracted from the Harborview retro backlog cleanup."},{version:"1.6.0",date:"2026-03-05",note:"Negative retro switched to recovery-plan drafts."},{version:"1.7.0",date:"2026-06-13",note:"Period diffs now carry the driving rate change per period."}],usedBy:["ag-payroll-audit","ag-comp"],tests:"21 unit cases; covered by the es-payroll regression suite",code:`export const retroPayCalculator = createTool({
  id: "retro-pay-calculator",
  description: "Compute retroactive pay across periods for a late effective-dated change.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    changeId: z.string().regex(/^ce-[0-9]{7}$/),
  }),
  outputSchema: z.object({
    amountCents: z.number().int(),
    periods: z.array(z.object({ payPeriodEndDate: z.string().date(), deltaCents: z.number().int() })),
    earningCode: z.literal("RETRO"),
    staged: z.boolean(),
  }),
  execute: async ({ context }) => {
    const change = await changes.get(context.changeId);
    const closed = await periods.closedSince(change.effectiveDate, context.employeeId);
    if (closed.length > 8) return manualRecalc(context, "beyond the 8-period SOX boundary");
    const diffs = closed.map((p) => diffGross(p, change));
    const amountCents = diffs.reduce((sum, d) => sum + d.deltaCents, 0);
    if (amountCents < 0) return draftRecoveryPlan(context.employeeId, diffs);
    return stageRetroEntry(context.employeeId, amountCents, diffs);
  },
});`},{id:"pr-054",name:"off-cycle-check-drafter",category:"Agent tools",version:"1.4.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:["adp-payroll-input-batch"],dependents:4,lastModified:"2026-05-16",mechanism:"Drafts an off-cycle payment with a required reason code and routes it to the approval queue; nothing reaches ADP until a named approver releases the draft.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"amountCents",type:"number",constraints:"integer cents, USD, 1 to 2500000",dir:"in"},{field:"reasonCode",type:"string",constraints:"enum: FINAL_PAY|MISSED_HOURS|BONUS_CORRECTION|SEVERANCE",dir:"in"},{field:"draftId",type:"string",constraints:"pattern: ^oc-[0-9]{6}$",dir:"out"},{field:"approvalRoute",type:"string",constraints:"payroll manager, then controller above 10000 USD",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"Payroll Input (pay-data batches: earnings, deductions, reimbursements)"}],failure:["Amounts above the 25,000 USD cap reject at draft; larger corrections go through payroll ops.","Duplicate draft for the same worker and reason inside 7 days returns the existing draft id."],changelog:[{version:"1.0.0",date:"2025-02-04",note:"Extracted from the Harborview off-cycle queue."},{version:"1.3.0",date:"2026-01-30",note:"Reason codes aligned to ADP earning codes."},{version:"1.4.0",date:"2026-05-16",note:"Added SEVERANCE with automatic final-pay linkage."}],usedBy:["ag-payroll-audit"],tests:"15 unit cases; covered by the es-payroll regression suite",code:`export const offCycleCheckDrafter = createTool({
  id: "off-cycle-check-drafter",
  description: "Draft an off-cycle payment with reason codes, routed for approval.",
  inputSchema: z.object({ employeeId: z.string(), amount: z.number(), reasonCode: z.string() }),
  outputSchema: z.object({ draftId: z.string() }),
  execute: async ({ context }) => draftOffCycle(context),
});`},{id:"pr-055",name:"garnishment-order-parser",category:"Agent tools",version:"1.6.1",origin:"Beacon Logistics, 2025-Q1",reuse:6,deps:[],dependents:4,lastModified:"2026-04-22",mechanism:"Extracts order type, amounts, CCPA priority class, and issuing agency from a scanned garnishment order with layout-aware OCR; the confidence score gates whether a specialist verifies before deduction setup.",schema:[{field:"documentUrl",type:"string",constraints:"https URL, PDF or TIFF",dir:"in"},{field:"orderType",type:"string",constraints:"enum: child-support|tax-levy|creditor|student-loan",dir:"out"},{field:"amountCents",type:"number",constraints:"integer cents, USD, per pay period",dir:"out"},{field:"priority",type:"number",constraints:"integer 1-4, CCPA ordering",dir:"out"},{field:"issuingAgency",type:"string",constraints:"agency name + state",dir:"out"},{field:"confidence",type:"number",constraints:"decimal 0-1; below 0.85 requires review",dir:"out"}],scopes:[{connector:"ServiceNow HR",scope:"sn_hr_core.case attachments (read)"}],failure:["Confidence below 0.85 routes to a payroll specialist with the extraction shown beside the scan.","Multi-order documents split into one draft per order rather than summing amounts.","Unreadable scans return a rescan request, never a partial amount."],changelog:[{version:"1.0.0",date:"2025-03-11",note:"Extracted from the Beacon garnishment intake."},{version:"1.6.0",date:"2026-02-25",note:"Added the student-loan wage garnishment class."},{version:"1.6.1",date:"2026-04-22",note:"Fixed priority ordering when a child-support order follows an existing tax levy."}],usedBy:["ag-payroll-audit"],tests:"24 unit cases; covered by the es-payroll regression suite",code:`export const garnishmentOrderParser = createTool({
  id: "garnishment-order-parser",
  description: "Extract order type, amounts, and priority from a scanned garnishment order.",
  inputSchema: z.object({ documentUrl: z.string().url() }),
  outputSchema: z.object({ orderType: z.string(), amount: z.number(), confidence: z.number() }),
  execute: async ({ context }) => parseOrder(context.documentUrl),
});`},{id:"pr-056",name:"overtime-anomaly-scorer",category:"Agent tools",version:"1.9.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ukg-timeclock-punch-stream","ps-wage-hour"],dependents:6,lastModified:"2026-07-09",mechanism:"Scores each week's overtime pattern per location against a 26-week baseline and the wage-hour pack thresholds, surfacing spikes, off-the-clock signals, and CA 7th-day violations.",schema:[{field:"locationId",type:"string",constraints:"pattern: ^loc-[0-9]{4}$",dir:"in"},{field:"weekOf",type:"string",constraints:"ISO 8601 date, a Monday",dir:"in"},{field:"anomalies[]",type:"Anomaly[]",constraints:"employeeId, kind enum: spike|off-clock|seventh-day|meal-break, score 0-100, weekHours",dir:"out"},{field:"baselineWeeks",type:"number",constraints:"integer, 26 unless history is shorter",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Time Management: punches (Get)"},{connector:"Policy Library",scope:"Packs: ps-wage-hour (read)"}],failure:["Locations with under 26 weeks of history score against the regional baseline and mark results provisional.","Meal-break and 7th-day checks only run where the pack applies; other states skip rather than false-positive."],changelog:[{version:"1.0.0",date:"2025-02-19",note:"Extracted from the Beacon overtime review."},{version:"1.8.0",date:"2026-04-16",note:"Added meal-break premium detection for CA locations."},{version:"1.9.0",date:"2026-07-09",note:"Score now weights consecutive-week persistence."}],usedBy:["ag-payroll-audit","ag-pay-compliance"],tests:"20 unit cases; covered by the es-payroll regression suite",code:`export const overtimeAnomalyScorer = createTool({
  id: "overtime-anomaly-scorer",
  description: "Score weekly overtime patterns against location baselines and the wage-hour corpus.",
  inputSchema: z.object({ locationId: z.string(), weekOf: z.string() }),
  outputSchema: z.object({ anomalies: z.array(anomalySchema) }),
  execute: async ({ context }) => scoreOvertime(context.locationId, context.weekOf),
});`},{id:"pr-057",name:"pay-period-reconciler",category:"Agent tools",version:"2.0.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["adp-payroll-input-batch","ukg-employee-changes-poller"],dependents:7,lastModified:"2026-07-16",mechanism:"Joins every HCM change event effective in the period against staged payroll inputs by worker and category, and reports matches, misses on either side, and coverage before the run locks.",schema:[{field:"payGroupCode",type:"string",constraints:"pattern: ^US-BW-[0-9]{2}$",dir:"in"},{field:"payPeriodEndDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"matched",type:"number",constraints:"integer, joined pairs",dir:"out"},{field:"unmatched[]",type:"object[]",constraints:"side enum: hcm-only|payroll-only; workerId, category, detail",dir:"out"},{field:"coveragePct",type:"number",constraints:"decimal 0-100",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"Payroll Input (pay-data batches: earnings, deductions, reimbursements)"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["Events effective inside the period but received after cutoff list as late-arrivals tagged for the next period.","Unmatched rate changes above 5% of base flag hold-recommended; the release decision stays with payroll.","HTTP 429 on either side: the join checkpoint persists and resumes without double-counting."],changelog:[{version:"1.5.0",date:"2025-11-13",note:"Category-level matching replaced whole-worker matching."},{version:"1.9.0",date:"2026-04-09",note:"Added orphan payroll-input detection."},{version:"2.0.0",date:"2026-07-16",note:"Two-sided reconciliation: hcm-only and payroll-only misses report separately."}],usedBy:["ag-payroll-audit"],tests:"29 unit cases; covered by the es-payroll regression suite",code:`export const payPeriodReconciler = createTool({
  id: "pay-period-reconciler",
  description: "Reconcile HCM change events against payroll inputs for one period.",
  inputSchema: z.object({
    payGroupCode: z.string().regex(/^US-BW-[0-9]{2}$/),
    payPeriodEndDate: z.string().date(),
  }),
  outputSchema: z.object({
    matched: z.number().int(),
    unmatched: z.array(z.object({
      side: z.enum(["hcm-only", "payroll-only"]),
      workerId: z.string(),
      category: z.string(),
      detail: z.string(),
    })),
    coveragePct: z.number().min(0).max(100),
  }),
  execute: async ({ context }) => {
    const events = await ukg.get("/personnel/v1/employee-changes", windowFor(context));
    const staged = await adp.get("/events/payroll/v1/pay-data-input", context);
    const join = joinByWorkerAndCategory(events, staged.entries);
    for (const miss of join.hcmOnly) if (isRateChangeAbovePct(miss, 5)) miss.holdRecommended = true;
    return { matched: join.matched.length, unmatched: join.misses(), coveragePct: join.coveragePct() };
  },
});`},{id:"pr-058",name:"gl-mapping-suggester",category:"Agent tools",version:"1.2.0",origin:"Harborview Systems, 2024-Q4",reuse:5,deps:["adp-gl-extract-reader"],dependents:3,lastModified:"2026-02-26",mechanism:"Suggests ledger account and cost-center mappings for unmapped earning codes by ranking 24 months of historical postings for similar codes.",schema:[{field:"earningCode",type:"string",constraints:"pattern: ^[A-Z0-9_]{2,8}$",dir:"in"},{field:"suggestions[]",type:"object[]",constraints:"glAccount, costCenter, confidence 0-1, sampleCount",dir:"out"},{field:"topConfidence",type:"number",constraints:"decimal 0-1",dir:"out"}],scopes:[{connector:"ADP GlobalView",scope:"API Central use case: General Ledger (read)"}],failure:["Codes with no historical analog return empty rather than a low-confidence guess.","Suggestions are drafts; posting rules change only through the controller-approved mapping table."],changelog:[{version:"1.0.0",date:"2025-04-03",note:"Extracted from the Harborview GL cleanup."},{version:"1.2.0",date:"2026-02-26",note:"Ranking now weights recency over posting volume."}],usedBy:["ag-payroll-audit"],tests:"11 unit cases; covered by the es-payroll regression suite",code:`export const glMappingSuggester = createTool({
  id: "gl-mapping-suggester",
  description: "Suggest ledger mappings for unmapped earning codes from historical postings.",
  inputSchema: z.object({ earningCode: z.string() }),
  outputSchema: z.object({ suggestions: z.array(mappingSchema) }),
  execute: async ({ context }) => suggestMapping(context.earningCode),
});`},{id:"pr-059",name:"staffing-event-correlator",category:"Agent tools",version:"2.3.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:["ukg-employee-changes-poller","workday-bp-event-listener"],dependents:8,lastModified:"2026-07-12",mechanism:"Correlates hire, term, and transfer events across Workday, SuccessFactors, and UKG by worker and effective date to explain headcount movement without double-counting cross-system echoes.",schema:[{field:"orgId",type:"string",constraints:"supervisory org, pattern: ^org-[0-9]{4}$",dir:"in"},{field:"from",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"to",type:"string",constraints:"ISO 8601 date, > from",dir:"in"},{field:"correlated[]",type:"object[]",constraints:"workerId, eventChain[], netEffect enum: add|remove|move|echo",dir:"out"},{field:"echoesSuppressed",type:"number",constraints:"integer, cross-system duplicates removed",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Current Staffing Information (Get)"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["Events matching on worker but conflicting on effective date surface as a conflict row for HRIS review.","The same termination arriving from Workday and UKG suppresses into one event with both sources cited."],changelog:[{version:"1.0.0",date:"2025-03-26",note:"Extracted from the Beacon headcount bridge."},{version:"2.2.0",date:"2026-04-24",note:"Added SuccessFactors EC events for the Lakeshore population."},{version:"2.3.0",date:"2026-07-12",note:"Echo suppression now keys on worker + event class + effective week."}],usedBy:["ag-planning","ag-payroll-audit"],tests:"18 unit cases; covered by the es-planning regression suite",code:`export const staffingEventCorrelator = createTool({
  id: "staffing-event-correlator",
  description: "Correlate hires, terms, and transfers across HCM and timekeeping to explain headcount moves.",
  inputSchema: z.object({ orgId: z.string(), from: z.string(), to: z.string() }),
  outputSchema: z.object({ correlated: z.array(correlationSchema) }),
  execute: async ({ context }) => correlateEvents(context.orgId, context.from, context.to),
});`},{id:"pr-060",name:"posting-jurisdiction-resolver",category:"Agent tools",version:"2.1.0",origin:"Crestline Foods, 2025-Q2",reuse:8,deps:["ps-co-epewa","ps-ca-sb1162"],dependents:7,lastModified:"2026-07-20",mechanism:"Determines which pay transparency packs govern a posting from worksite states, remote eligibility, and posting reach, then returns the strictest disclosure set that satisfies all of them.",schema:[{field:"jobId",type:"number",constraints:"int64, Greenhouse job id",dir:"in"},{field:"remoteEligible",type:"boolean",constraints:"true widens reach to remote-hire states",dir:"in"},{field:"jurisdictions[]",type:"string[]",constraints:"enum values: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"out"},{field:"strictest",type:"string",constraints:"governing pack id, e.g. ps-ca-sb1162",dir:"out"},{field:"requirements[]",type:"object[]",constraints:"disclosure text + source packId per row",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: jobs (endpoint family)"},{connector:"Policy Library",scope:"Packs: pay transparency (read, current versions)"}],failure:["Remote-eligible postings with nationwide reach apply the union of CO EPEWA and CA SB 1162, not one or the other.","States without a transparency pack list as uncovered so counsel sees the gap.","Greenhouse HTTP 429: backoff per Retry-After; resolution is idempotent per jobId."],changelog:[{version:"1.0.0",date:"2025-05-08",note:"Extracted from the Crestline posting review."},{version:"2.0.0",date:"2026-02-11",note:"Requirements itemize per disclosure instead of one pack blob."},{version:"2.1.0",date:"2026-07-20",note:"Added the IL and NJ 2026 amendments."}],usedBy:["ag-pay-compliance","ag-screener"],tests:"23 unit cases; covered by the es-pay-compliance regression suite",code:`export const postingJurisdictionResolver = createTool({
  id: "posting-jurisdiction-resolver",
  description: "Resolve which pay transparency packs apply from worksite, remote policy, and posting reach.",
  inputSchema: z.object({
    jobId: z.number().int().positive(),
    remoteEligible: z.boolean(),
  }),
  outputSchema: z.object({
    jurisdictions: z.array(z.enum(["CA", "NY", "TX", "WA", "CO", "IL", "NJ", "MA", "FL", "GA"])),
    strictest: z.string(),
    requirements: z.array(z.object({ disclosure: z.string(), packId: z.string() })),
  }),
  execute: async ({ context }) => {
    const job = await harvest.get("/v1/jobs/" + context.jobId);
    const states = worksiteStates(job.offices);
    if (context.remoteEligible) states.push(...remoteReachStates(job));
    const packs = await library.transparencyPacks(dedupe(states));
    if (packs.uncovered.length > 0) noteCoverageGap(context.jobId, packs.uncovered);
    return { jurisdictions: dedupe(states), strictest: packs.strictestId, requirements: packs.union() };
  },
});`},{id:"pr-061",name:"range-goodfaith-checker",category:"Agent tools",version:"1.8.2",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["ps-ca-sb1162","sf-odata-ec-compinfo"],dependents:6,lastModified:"2026-07-03",mechanism:"Tests a posted range against the internal band, incumbent pay percentiles, and trailing-12-month offers for the job code; a range wider than 1.15x the band or excluding incumbents fails.",schema:[{field:"jobId",type:"number",constraints:"int64, Greenhouse job id",dir:"in"},{field:"minCents",type:"number",constraints:"integer cents, USD, > 0",dir:"in"},{field:"maxCents",type:"number",constraints:"integer cents, USD, > minCents",dir:"in"},{field:"pass",type:"boolean",constraints:"false when any finding has severity fail",dir:"out"},{field:"findings[]",type:"object[]",constraints:"rule, severity enum: fail|warn, detail",dir:"out"},{field:"bandRatio",type:"number",constraints:"posted width / band width, <= 1.15 to pass",dir:"out"}],scopes:[{connector:"SAP SuccessFactors",scope:"Employee Central Effective Dated Entities: Compensation Information (RBP)"},{connector:"Greenhouse",scope:"Harvest: offers (endpoint family)"}],failure:["Job codes with no mapped band return not-checkable and route to comp; the tool never passes by default.","Ranges excluding more than 10% of incumbents fail with the incumbent percentile table attached.","SF OData HTTP 429: backoff and retry, max 4 tries, then the check parks as blocked."],changelog:[{version:"1.0.0",date:"2025-05-21",note:"Extracted from the Crestline SB 1162 review."},{version:"1.8.0",date:"2026-04-14",note:"Added recent-offer comparison over trailing 12 months."},{version:"1.8.2",date:"2026-07-03",note:"Fixed geo-tier band selection for remote postings."}],usedBy:["ag-pay-compliance","ag-comp"],tests:"26 unit cases; covered by the es-pay-compliance regression suite",code:`export const rangeGoodfaithChecker = createTool({
  id: "range-goodfaith-checker",
  description: "Check a posted range against internal bands and incumbent pay for good faith.",
  inputSchema: z.object({
    jobId: z.number().int().positive(),
    minCents: z.number().int().positive(),
    maxCents: z.number().int().positive(),
  }).refine((r) => r.maxCents > r.minCents, { message: "max must exceed min" }),
  outputSchema: z.object({
    pass: z.boolean(),
    findings: z.array(z.object({ rule: z.string(), severity: z.enum(["fail", "warn"]), detail: z.string() })),
    bandRatio: z.number(),
  }),
  execute: async ({ context }) => {
    const band = await bands.forJob(context.jobId);
    if (!band) return notCheckable(context.jobId, "no mapped comp band");
    const incumbents = await sf.odata.get("/odata/v2/EmpPayCompRecurring", incumbentFilter(band.jobCode));
    const findings = [
      widthRule(context, band, 1.15),
      incumbentCoverageRule(context, incumbents, 0.9),
      recentOfferRule(context, await offers.trailing12Months(band.jobCode)),
    ].filter(Boolean);
    return { pass: findings.every((f) => f.severity !== "fail"), findings, bandRatio: width(context) / width(band) };
  },
});`},{id:"pr-062",name:"comp-band-placement-checker",category:"Agent tools",version:"1.5.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["sf-odata-ec-compinfo"],dependents:5,lastModified:"2026-06-19",mechanism:"Validates a proposed salary against the job code's band and geo tier, returning the compa-ratio and whether the placement needs the out-of-band exception route.",schema:[{field:"jobCode",type:"string",constraints:"pattern: ^[A-Z]{2,4}-[0-9]{3}$",dir:"in"},{field:"proposedCents",type:"number",constraints:"integer cents, USD, annualized",dir:"in"},{field:"geoTier",type:"string",constraints:"enum: tier-1|tier-2|tier-3",dir:"in"},{field:"inBand",type:"boolean",constraints:"true when min <= proposed <= max",dir:"out"},{field:"compaRatio",type:"number",constraints:"decimal(4,2), proposed / band midpoint",dir:"out"},{field:"exceptionRequired",type:"boolean",constraints:"true when compa-ratio outside 0.80-1.10",dir:"out"}],scopes:[{connector:"SAP SuccessFactors",scope:"Employee Central Effective Dated Entities: Compensation Information (RBP)"}],failure:["Compa-ratio above 1.10 or below 0.80 marks exceptionRequired; the draft routes to the total rewards lead.","Job codes missing a band mapping return not-checkable rather than approving."],changelog:[{version:"1.0.0",date:"2026-01-29",note:"Built for the Meridian merit cycle."},{version:"1.4.0",date:"2026-04-17",note:"Geo tier resolution folded in; callers stopped pre-resolving."},{version:"1.5.0",date:"2026-06-19",note:"Added the exception routing flag."}],usedBy:["ag-comp","ag-mobility"],tests:"14 unit cases; covered by the es-comp regression suite",code:`export const compBandPlacementChecker = createTool({
  id: "comp-band-placement-checker",
  description: "Validate a proposed salary against band, compa-ratio limits, and geo tier.",
  inputSchema: z.object({ jobCode: z.string(), proposed: z.number(), geoTier: z.string() }),
  outputSchema: z.object({ inBand: z.boolean(), compaRatio: z.number() }),
  execute: async ({ context }) => checkPlacement(context),
});`},{id:"pr-063",name:"geo-differential-resolver",category:"Agent tools",version:"1.3.1",origin:"Meridian Group, 2026-Q1",reuse:5,deps:[],dependents:3,lastModified:"2026-05-11",mechanism:"Maps a work location to its pay differential tier from the comp location table, applying the remote fallback (state metro anchor) when no office anchor exists.",schema:[{field:"location",type:"string",constraints:"city + state code, or loc-NNNN id",dir:"in"},{field:"remote",type:"boolean",constraints:"true applies the state metro fallback",dir:"in"},{field:"tier",type:"string",constraints:"enum: tier-1|tier-2|tier-3",dir:"out"},{field:"multiplier",type:"number",constraints:"decimal(3,2), 0.85 to 1.15",dir:"out"},{field:"tableVersion",type:"string",constraints:"e.g. geo-2026.2",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Worker (Get)"}],failure:["Locations absent from the table return tier-3 with a table-gap note, never a silent 1.00.","Remote workers with no state on file route to HR data quality instead of guessing."],changelog:[{version:"1.0.0",date:"2026-01-15",note:"Built for the Meridian geo differential rollout."},{version:"1.3.0",date:"2026-03-27",note:"Remote fallback switched to state metro anchors."},{version:"1.3.1",date:"2026-05-11",note:"Fixed tier lookup for hyphenated city names."}],usedBy:["ag-comp","ag-pay-compliance"],tests:"12 unit cases; covered by the es-comp regression suite",code:`export const geoDifferentialResolver = createTool({
  id: "geo-differential-resolver",
  description: "Resolve the pay differential tier for a work location, with remote fallbacks.",
  inputSchema: z.object({ location: z.string(), remote: z.boolean() }),
  outputSchema: z.object({ tier: z.string(), multiplier: z.number() }),
  execute: async ({ context }) => resolveGeoTier(context.location, context.remote),
});`},{id:"pr-064",name:"merit-matrix-applier",category:"Agent tools",version:"1.6.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["workday-comp-writeback"],dependents:4,lastModified:"2026-06-28",mechanism:"Applies the approved merit matrix (performance rating by compa-ratio quartile) to a population and stages proposed increases as drafts; nothing reaches Workday before the cycle's batch approval.",schema:[{field:"cycleId",type:"string",constraints:"pattern: ^mc-[0-9]{4}$",dir:"in"},{field:"populationId",type:"string",constraints:"saved population, pattern: ^pop-[a-z0-9-]+$",dir:"in"},{field:"proposals[]",type:"object[]",constraints:"employeeId, currentCents, proposedCents, matrixCell",dir:"out"},{field:"exceptions[]",type:"object[]",constraints:"out-of-matrix rows routed to comp review",dir:"out"},{field:"totalBudgetCents",type:"number",constraints:"integer cents, USD, staged sum",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Worker (Get)"},{connector:"SAP SuccessFactors",scope:"Employee Central Effective Dated Entities: Compensation Information (RBP)"}],failure:["Proposals exceeding the cycle budget by more than 2% halt staging and return the overage by org.","Workers with no performance rating land on the hold list, not in a default cell.","Mid-cycle transfers apply the destination org's matrix."],changelog:[{version:"1.0.0",date:"2026-02-03",note:"Built for the Meridian 2026 merit cycle."},{version:"1.5.0",date:"2026-05-06",note:"Budget check moved ahead of staging."},{version:"1.6.0",date:"2026-06-28",note:"Added the per-org overage breakdown."}],usedBy:["ag-comp"],tests:"17 unit cases; covered by the es-comp regression suite",code:`export const meritMatrixApplier = createTool({
  id: "merit-matrix-applier",
  description: "Apply the merit matrix to a population and stage proposed increases.",
  inputSchema: z.object({ cycleId: z.string(), populationId: z.string() }),
  outputSchema: z.object({ proposals: z.array(proposalSchema) }),
  execute: async ({ context }) => applyMatrix(context.cycleId, context.populationId),
});`},{id:"pr-065",name:"offer-comp-benchmarker",category:"Agent tools",version:"1.4.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:4,lastModified:"2026-05-25",mechanism:"Places a draft offer against the band, the posted range, and accepted offers for the same job family over the trailing 12 months, returning the percentile and any hard flags.",schema:[{field:"applicationId",type:"number",constraints:"int64, Greenhouse application id",dir:"in"},{field:"proposedCents",type:"number",constraints:"integer cents, USD, annualized",dir:"in"},{field:"percentile",type:"number",constraints:"integer 0-100, vs peer offers",dir:"out"},{field:"peerOfferCount",type:"number",constraints:"integer, sample size",dir:"out"},{field:"notes[]",type:"string[]",constraints:"flags: above-posted-max, below-band-min, outlier-vs-peers",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: offers (endpoint family)"},{connector:"Greenhouse",scope:"Harvest: applications (endpoint family)"}],failure:["Fewer than 5 peer offers widens the window to 24 months and marks the sample thin.","Proposed pay above the posted max hard-flags; transparency-state postings cannot be exceeded without reposting."],changelog:[{version:"1.0.0",date:"2025-06-04",note:"Extracted from the Crestline offer desk."},{version:"1.3.0",date:"2026-02-20",note:"Peer set restricted to the same geo tier."},{version:"1.4.0",date:"2026-05-25",note:"Added the posted-range guard for transparency states."}],usedBy:["ag-screener","ag-comp"],tests:"15 unit cases; covered by the es-screener regression suite",code:`export const offerCompBenchmarker = createTool({
  id: "offer-comp-benchmarker",
  description: "Benchmark a draft offer against band, peer offers, and the posted range.",
  inputSchema: z.object({ applicationId: z.number(), proposed: z.number() }),
  outputSchema: z.object({ percentile: z.number(), notes: z.array(z.string()) }),
  execute: async ({ context }) => benchmarkOffer(context.applicationId, context.proposed),
});`},{id:"pr-066",name:"equity-vesting-explainer",category:"Agent tools",version:"1.1.0",origin:"Meridian Group, 2026-Q1",reuse:4,deps:[],dependents:2,lastModified:"2026-03-30",mechanism:"Reads the employee's grants and vesting schedule from the nightly cap-table export and renders a plain-language explanation with the next vest date and share count; amounts only, never advice.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"narrative",type:"string",constraints:"plain language, no tax guidance",dir:"out"},{field:"nextVestDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"out"},{field:"nextVestShares",type:"number",constraints:"integer shares",dir:"out"},{field:"grants[]",type:"object[]",constraints:"grantId, type enum: RSU|ISO|NSO, vested, unvested",dir:"out"}],scopes:[{connector:"SFTP flat-file gateway",scope:"cap-table exports (pull)"}],failure:["Employees with no grants get a none-on-file reply, not an empty table.","Tax questions in the request route to the equity team; the tool never estimates tax outcomes."],changelog:[{version:"1.0.0",date:"2026-01-21",note:"Built for Meridian equity helpdesk questions."},{version:"1.1.0",date:"2026-03-30",note:"Added cliff explanation for first-year grants."}],usedBy:["ag-helpdesk","ag-comp"],tests:"10 unit cases; covered by the es-helpdesk regression suite",code:`export const equityVestingExplainer = createTool({
  id: "equity-vesting-explainer",
  description: "Explain vesting schedules and upcoming events in plain language.",
  inputSchema: z.object({ employeeId: z.string() }),
  outputSchema: z.object({ narrative: z.string(), nextVestDate: z.string() }),
  execute: async ({ context }) => explainVesting(context.employeeId),
});`},{id:"pr-067",name:"i9-deadline-tracker",category:"Agent tools",version:"2.2.0",origin:"Crestline Foods, 2025-Q2",reuse:8,deps:["greenhouse-webhook-receiver","pk-fed-i9"],dependents:6,lastModified:"2026-07-14",mechanism:"Computes the Section 1 (by day 1) and Section 2 (within 3 business days) deadlines from the confirmed start date, tracks completion from onboarding events, and escalates at T-1 business day.",schema:[{field:"hireId",type:"string",constraints:"pattern: ^gh-[0-9]{8}$",dir:"in"},{field:"startDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"section1Due",type:"string",constraints:"ISO 8601 date, = startDate",dir:"out"},{field:"section2Due",type:"string",constraints:"ISO 8601 date, startDate + 3 business days",dir:"out"},{field:"status",type:"string",constraints:"enum: on-track|at-risk|lapsed",dir:"out"},{field:"escalatedTo",type:"string",constraints:"coordinator id when at-risk",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: candidates (endpoint family)"},{connector:"Slack",scope:"chat:write"}],failure:["Start date changes re-anchor both deadlines and cancel stale escalations.","Remote hires with no authorized representative on file escalate at T-2 instead of T-1."],changelog:[{version:"1.0.0",date:"2025-05-14",note:"Extracted from the Crestline hiring surge."},{version:"2.0.0",date:"2026-01-16",note:"Business-day math replaced calendar days."},{version:"2.2.0",date:"2026-07-14",note:"Added alternative-procedure tracking for E-Verify remote document examination."}],usedBy:["ag-onboarding"],tests:"16 unit cases; covered by the es-onboarding regression suite",code:`export const i9DeadlineTracker = createTool({
  id: "i9-deadline-tracker",
  description: "Track I-9 section deadlines from the start date and escalate before they lapse.",
  inputSchema: z.object({ hireId: z.string(), startDate: z.string() }),
  outputSchema: z.object({ section2Due: z.string(), status: z.string() }),
  execute: async ({ context }) => trackDeadlines(context.hireId, context.startDate),
});`},{id:"pr-068",name:"cobra-notice-scheduler",category:"Agent tools",version:"1.7.1",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-cobra","smtp-notice-mailer"],dependents:5,lastModified:"2026-06-21",mechanism:"Derives the election notice deadline (44 days from the qualifying event under the employer-as-administrator rule) and the 60-day election window, then schedules the notice send and follow-ups.",schema:[{field:"eventId",type:"string",constraints:"pattern: ^qe-[0-9]{6}$",dir:"in"},{field:"eventDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"noticeDate",type:"string",constraints:"ISO 8601 date, <= eventDate + 44 days",dir:"out"},{field:"electionDeadline",type:"string",constraints:"ISO 8601 date, notice + 60 days",dir:"out"},{field:"scheduled[]",type:"object[]",constraints:"send date + template id per notice",dir:"out"}],scopes:[{connector:"SMTP notice mailer",scope:"compliance templates (send)"},{connector:"Policy Library",scope:"Packs: ps-cobra (read)"}],failure:["Events reported more than 30 days late compress the schedule and flag the timing risk to benefits.","Missing dependent addresses hold the notice and open a data-quality task rather than mailing incomplete."],changelog:[{version:"1.0.0",date:"2025-10-16",note:"Extracted from the Northline benefits build."},{version:"1.7.0",date:"2026-04-08",note:"Layered state mini-COBRA variants for Cal-COBRA and NY."},{version:"1.7.1",date:"2026-06-21",note:"Fixed window math when the event date equals the coverage end date."}],usedBy:["ag-offboarding"],tests:"18 unit cases; covered by the es-offboarding regression suite",code:`export const cobraNoticeScheduler = createTool({
  id: "cobra-notice-scheduler",
  description: "Schedule election notices from qualifying event dates per the timing pack.",
  inputSchema: z.object({ eventId: z.string(), eventDate: z.string() }),
  outputSchema: z.object({ noticeDate: z.string(), electionDeadline: z.string() }),
  execute: async ({ context }) => scheduleNotices(context.eventId, context.eventDate),
});`},{id:"pr-069",name:"benefits-event-classifier",category:"Agent tools",version:"1.5.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["workday-bp-event-listener"],dependents:5,lastModified:"2026-05-29",mechanism:"Classifies a described life event into the qualifying-event taxonomy and returns the evidence documents plus the 30- or 60-day election window that applies.",schema:[{field:"description",type:"string",constraints:"1-2000 chars, employee's own words",dir:"in"},{field:"eventDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"category",type:"string",constraints:"enum: marriage|divorce|birth-adoption|loss-of-coverage|dependent-aging-out|death|move",dir:"out"},{field:"windowDays",type:"number",constraints:"integer, 30 or 60 per SPD",dir:"out"},{field:"evidenceNeeded[]",type:"string[]",constraints:"document names, cited to SPD section",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Worker (Get)"}],failure:["Ambiguous descriptions return the top 2 candidate categories for the employee to confirm, not a guess.","Events reported outside the window classify as untimely and route to benefits for exception review."],changelog:[{version:"1.0.0",date:"2025-10-23",note:"Extracted from the Northline enrollment desk."},{version:"1.4.0",date:"2026-03-06",note:"Added dependent-aging-out with the age-26 window."},{version:"1.5.0",date:"2026-05-29",note:"Evidence lists now cite the SPD pack section."}],usedBy:["ag-helpdesk"],tests:"15 unit cases; covered by the es-helpdesk regression suite",code:`export const benefitsEventClassifier = createTool({
  id: "benefits-event-classifier",
  description: "Classify life events into qualifying event categories with evidence requirements.",
  inputSchema: z.object({ description: z.string(), eventDate: z.string() }),
  outputSchema: z.object({ category: z.string(), evidenceNeeded: z.array(z.string()) }),
  execute: async ({ context }) => classifyEvent(context.description, context.eventDate),
});`},{id:"pr-070",name:"dependent-verification-checker",category:"Agent tools",version:"1.2.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:[],dependents:3,lastModified:"2026-04-03",mechanism:"Checks submitted documents against the eligibility matrix per dependent type and lists exactly which items remain missing, with a validity window on completed verifications.",schema:[{field:"dependentId",type:"string",constraints:"pattern: ^dep-[0-9]{6}$",dir:"in"},{field:"documentIds[]",type:"string[]",constraints:"case attachment ids, min 1",dir:"in"},{field:"verified",type:"boolean",constraints:"true only when every required item passes",dir:"out"},{field:"gaps[]",type:"string[]",constraints:"missing item + reason per row",dir:"out"},{field:"expiresAt",type:"string",constraints:"ISO 8601 date, verification validity end",dir:"out"}],scopes:[{connector:"ServiceNow HR",scope:"sn_hr_core.case attachments (read)"}],failure:["Illegible or truncated documents mark the item unverified with a resubmission note, never silently accepted.","Conflicting names across documents route to benefits with both spellings shown."],changelog:[{version:"1.0.0",date:"2025-10-29",note:"Extracted from the Northline dependent audit."},{version:"1.2.0",date:"2026-04-03",note:"Added domestic partner affidavit rules."}],usedBy:["ag-helpdesk"],tests:"12 unit cases; covered by the es-helpdesk regression suite",code:`export const dependentVerificationChecker = createTool({
  id: "dependent-verification-checker",
  description: "Check submitted documents against dependent eligibility rules.",
  inputSchema: z.object({ dependentId: z.string(), documentIds: z.array(z.string()) }),
  outputSchema: z.object({ verified: z.boolean(), gaps: z.array(z.string()) }),
  execute: async ({ context }) => verifyDependent(context.dependentId, context.documentIds),
});`},{id:"pr-071",name:"aca-hours-aggregator",category:"Agent tools",version:"1.8.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ukg-timeclock-punch-stream","pk-fed-aca"],dependents:5,lastModified:"2026-06-16",mechanism:"Aggregates hours of service across the ACA measurement period per the look-back method and flags workers crossing the 130-hour monthly threshold in either direction.",schema:[{field:"populationId",type:"string",constraints:"pattern: ^pop-[a-z0-9-]+$",dir:"in"},{field:"period",type:"string",constraints:"measurement window id, e.g. std-2026",dir:"in"},{field:"statusChanges[]",type:"object[]",constraints:"employeeId, direction enum: to-full-time|to-part-time, avgMonthlyHours",dir:"out"},{field:"stabilityStartDate",type:"string",constraints:"ISO 8601 date for the resulting stability period",dir:"out"}],scopes:[{connector:"UKG Pro WFM",scope:"Time Management: punches (Get)"},{connector:"Policy Library",scope:"Packs: pk-fed-aca (read)"}],failure:["Unpaid FMLA and USERRA months apply the pack's averaging exclusions instead of counting as zero.","New hires without a full measurement period report under the initial-measurement track separately.","HTTP 429 from UKG: backoff per Retry-After; aggregation resumes at the last processed employee."],changelog:[{version:"1.0.0",date:"2025-03-19",note:"Extracted from the Beacon ACA lookback build."},{version:"1.7.0",date:"2026-02-12",note:"Added special unpaid-leave averaging for FMLA and USERRA."},{version:"1.8.0",date:"2026-06-16",note:"Stability period assignments now emit with each status change."}],usedBy:["ag-pay-compliance","ag-planning"],tests:"19 unit cases; covered by the es-pay-compliance regression suite",code:`export const acaHoursAggregator = createTool({
  id: "aca-hours-aggregator",
  description: "Aggregate measurement period hours and flag full-time status changes.",
  inputSchema: z.object({ populationId: z.string(), period: z.string() }),
  outputSchema: z.object({ statusChanges: z.array(statusChangeSchema) }),
  execute: async ({ context }) => aggregateHours(context.populationId, context.period),
});`},{id:"pr-072",name:"resume-evidence-extractor",category:"Agent tools",version:"2.6.0",origin:"Crestline Foods, 2025-Q2",reuse:9,deps:["greenhouse-harvest-client"],dependents:9,lastModified:"2026-07-28",mechanism:"Extracts skill and experience evidence for each rubric dimension as verbatim spans with character offsets from the source document, so a reviewer can verify every claim in one click.",schema:[{field:"candidateId",type:"number",constraints:"int64, Greenhouse candidate id",dir:"in"},{field:"rubricId",type:"string",constraints:"pattern: ^rub-[a-z0-9-]+$",dir:"in"},{field:"evidence[]",type:"object[]",constraints:"dimension, verbatim quote, charStart, charEnd, attachmentId",dir:"out"},{field:"coverage",type:"number",constraints:"decimal 0-1, dimensions with at least 1 span",dir:"out"},{field:"unsupported[]",type:"string[]",constraints:"dimensions with no evidence found",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: candidates (endpoint family)"}],failure:["Dimensions with no supporting span return unsupported rather than a low-confidence paraphrase.","Scanned resumes below the OCR quality threshold route to manual screen with page images attached.","Greenhouse HTTP 429: backoff per Retry-After; extraction is idempotent per candidate + rubric."],changelog:[{version:"1.0.0",date:"2025-06-12",note:"Extracted from the Crestline screening pilot."},{version:"2.5.0",date:"2026-05-15",note:"Spans carry character offsets for the reviewer overlay."},{version:"2.6.0",date:"2026-07-28",note:"Cover letters and portfolio attachments joined the evidence pool."}],usedBy:["ag-screener","ag-mobility"],tests:"28 unit cases; covered by the es-screener regression suite",code:`export const resumeEvidenceExtractor = createTool({
  id: "resume-evidence-extractor",
  description: "Extract skill and experience evidence with spans quoted from the source document.",
  inputSchema: z.object({
    candidateId: z.number().int().positive(),
    rubricId: z.string().regex(/^rub-[a-z0-9-]+$/),
  }),
  outputSchema: z.object({
    evidence: z.array(z.object({
      dimension: z.string(),
      quote: z.string().min(8),
      charStart: z.number().int().nonnegative(),
      charEnd: z.number().int(),
      attachmentId: z.string(),
    })),
    coverage: z.number().min(0).max(1),
    unsupported: z.array(z.string()),
  }),
  execute: async ({ context }) => {
    const docs = await harvest.get("/v1/candidates/" + context.candidateId, { expand: "attachments" });
    const readable = await ocrGate(docs.attachments, { minQuality: 0.9 });
    if (readable.length === 0) return manualScreen(context.candidateId, "no machine-readable document");
    const rubric = await rubrics.get(context.rubricId);
    const spans = await extractSpans(readable, rubric.dimensions);
    return withCoverage(spans, rubric.dimensions);
  },
});`},{id:"pr-073",name:"candidate-dedupe-matcher",category:"Agent tools",version:"1.9.0",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["greenhouse-harvest-client"],dependents:5,lastModified:"2026-06-06",mechanism:"Matches an incoming candidate against existing records on normalized email, phone, and employer-title n-grams, returning scored matches above 0.82 for recruiter merge review.",schema:[{field:"candidateId",type:"number",constraints:"int64, Greenhouse candidate id",dir:"in"},{field:"matches[]",type:"object[]",constraints:"existingCandidateId, score decimal 0-1, signals[]",dir:"out"},{field:"autoMergeEligible",type:"boolean",constraints:"true only on exact email + name",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: candidates (endpoint family)"}],failure:["Scores between 0.82 and 0.95 queue for recruiter review; only exact email matches suggest auto-merge.","Candidates with redacted contact info match on employer-title history only and cap at 0.90."],changelog:[{version:"1.0.0",date:"2025-06-25",note:"Extracted from the Crestline ATS cleanup."},{version:"1.8.0",date:"2026-03-13",note:"Added phone normalization for international formats."},{version:"1.9.0",date:"2026-06-06",note:"Employer-title n-grams replaced whole-string comparison."}],usedBy:["ag-screener"],tests:"17 unit cases; covered by the es-screener regression suite",code:`export const candidateDedupeMatcher = createTool({
  id: "candidate-dedupe-matcher",
  description: "Match incoming candidates against existing records with confidence scoring.",
  inputSchema: z.object({ candidateId: z.number() }),
  outputSchema: z.object({ matches: z.array(matchSchema) }),
  execute: async ({ context }) => findDuplicates(context.candidateId),
});`},{id:"pr-074",name:"req-intake-normalizer",category:"Agent tools",version:"1.4.1",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:4,lastModified:"2026-05-02",mechanism:"Parses a free-text requisition intake into structured job code, level, and locations by matching against the job catalog, returning what it could not map for the recruiter to fix.",schema:[{field:"intakeText",type:"string",constraints:"1-5000 chars",dir:"in"},{field:"jobCode",type:"string",constraints:"pattern: ^[A-Z]{2,4}-[0-9]{3}$",dir:"out"},{field:"level",type:"string",constraints:"enum: L1|L2|L3|L4|L5|L6",dir:"out"},{field:"locations[]",type:"string[]",constraints:"city + state code per row",dir:"out"},{field:"unmapped[]",type:"string[]",constraints:"phrases the catalog could not place",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: jobs (endpoint family)"}],failure:["Intakes matching multiple job codes return ranked candidates, never a silent first pick.","Unmappable location phrases pass through to unmapped[] for recruiter correction."],changelog:[{version:"1.0.0",date:"2025-07-09",note:"Extracted from the Crestline req intake backlog."},{version:"1.4.0",date:"2026-02-27",note:"Level inference now uses the catalog's scope language."},{version:"1.4.1",date:"2026-05-02",note:"Fixed multi-location parsing with mixed remote markers."}],usedBy:["ag-screener"],tests:"13 unit cases; covered by the es-screener regression suite",code:`export const reqIntakeNormalizer = createTool({
  id: "req-intake-normalizer",
  description: "Normalize free-text req intakes into structured job, level, and location fields.",
  inputSchema: z.object({ intakeText: z.string() }),
  outputSchema: z.object({ jobCode: z.string(), level: z.string(), locations: z.array(z.string()) }),
  execute: async ({ context }) => normalizeIntake(context.intakeText),
});`},{id:"pr-075",name:"interview-loop-scheduler",category:"Agent tools",version:"1.6.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["msgraph-calendar-reader","greenhouse-harvest-client"],dependents:4,lastModified:"2026-06-10",mechanism:"Intersects panel free/busy from Graph with the candidate's offered windows and proposes complete loops (every interviewer, ordered rounds) instead of isolated slots.",schema:[{field:"applicationId",type:"number",constraints:"int64, Greenhouse application id",dir:"in"},{field:"panel[]",type:"string[]",constraints:"interviewer UPNs, 2-8 entries",dir:"in"},{field:"candidateWindows[]",type:"string[]",constraints:"ISO 8601 datetime ranges (UTC)",dir:"in"},{field:"proposals[]",type:"object[]",constraints:"ordered rounds, interviewer + slot per round",dir:"out"},{field:"holdsPlaced",type:"boolean",constraints:"true when tentative holds were created",dir:"out"}],scopes:[{connector:"Microsoft Graph (Entra ID)",scope:"Calendars.Read (Graph scope)"},{connector:"Greenhouse",scope:"Harvest: applications (endpoint family)"}],failure:["No complete loop inside the candidate windows returns the two best partial loops with the missing round named.","Calendar changes after proposal re-run only the affected round.","Graph HTTP 429: honors Retry-After and batches getSchedule calls at 20 mailboxes."],changelog:[{version:"1.0.0",date:"2025-07-16",note:"Extracted from the Crestline scheduling desk."},{version:"1.5.0",date:"2026-03-20",note:"Round ordering constraints enforced, debrief always last."},{version:"1.6.0",date:"2026-06-10",note:"Candidate-window intersection ended dead-slot proposals."}],usedBy:["ag-screener"],tests:"14 unit cases; covered by the es-screener regression suite",code:`export const interviewLoopScheduler = createTool({
  id: "interview-loop-scheduler",
  description: "Propose interview loops from panel availability and candidate windows.",
  inputSchema: z.object({ applicationId: z.number(), panel: z.array(z.string()) }),
  outputSchema: z.object({ proposals: z.array(slotSchema) }),
  execute: async ({ context }) => proposeLoops(context.applicationId, context.panel),
});`},{id:"pr-076",name:"offer-letter-assembler",category:"Agent tools",version:"2.0.1",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["docusign-envelope-sender","range-goodfaith-checker"],dependents:6,lastModified:"2026-07-17",mechanism:"Assembles an offer letter from approved clause blocks, the benchmarked comp package, and jurisdiction addenda (non-compete notices, posted range where required), then stages a DocuSign envelope.",schema:[{field:"applicationId",type:"number",constraints:"int64, Greenhouse application id",dir:"in"},{field:"packageId",type:"string",constraints:"approved comp package, pattern: ^pkg-[0-9]{5}$",dir:"in"},{field:"documentId",type:"string",constraints:"assembled letter id",dir:"out"},{field:"clausesUsed[]",type:"string[]",constraints:"clause library ids",dir:"out"},{field:"addenda[]",type:"object[]",constraints:"state + reason per addendum",dir:"out"},{field:"envelopeStatus",type:"string",constraints:"enum: draft|sent",dir:"out"}],scopes:[{connector:"DocuSign",scope:"eSignature: Envelopes (create)"},{connector:"Greenhouse",scope:"Harvest: offers (endpoint family)"}],failure:["Comp outside the approved package rejects assembly; the letter never overrides the approval chain.","Missing jurisdiction addendum blocks the send and names the state and clause."],changelog:[{version:"1.0.0",date:"2025-07-30",note:"Extracted from the Crestline offer desk."},{version:"2.0.0",date:"2026-05-09",note:"Clause blocks moved to the governed clause library."},{version:"2.0.1",date:"2026-07-17",note:"Fixed WA non-compete threshold addendum selection."}],usedBy:["ag-screener"],tests:"16 unit cases; covered by the es-screener regression suite",code:`export const offerLetterAssembler = createTool({
  id: "offer-letter-assembler",
  description: "Assemble an offer letter from approved clauses, comp data, and jurisdiction addenda.",
  inputSchema: z.object({ applicationId: z.number(), packageId: z.string() }),
  outputSchema: z.object({ documentId: z.string(), clausesUsed: z.array(z.string()) }),
  execute: async ({ context }) => assembleOffer(context.applicationId, context.packageId),
});`},{id:"pr-077",name:"background-check-gate",category:"Agent tools",version:"1.3.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-webhook-receiver","pk-fed-fcra"],dependents:4,lastModified:"2026-04-27",mechanism:"Holds onboarding tasks until the background check clears; adverse results open the FCRA pre-adverse sequence (notice, 5-business-day wait, decision) instead of any automatic rejection.",schema:[{field:"hireId",type:"string",constraints:"pattern: ^gh-[0-9]{8}$",dir:"in"},{field:"cleared",type:"boolean",constraints:"true releases held onboarding tasks",dir:"out"},{field:"route",type:"string",constraints:"enum: proceed|pre-adverse|hr-review",dir:"out"},{field:"preAdverseSentAt",type:"string",constraints:"ISO 8601 datetime (UTC), when applicable",dir:"out"}],scopes:[{connector:"Greenhouse",scope:"Harvest: candidates (endpoint family)"},{connector:"SMTP notice mailer",scope:"compliance templates (send)"}],failure:["Adverse findings never auto-reject; the tool opens the pre-adverse sequence and waits for HR's decision.","Checks pending beyond 10 business days escalate to the vendor SLA contact with the case link."],changelog:[{version:"1.0.0",date:"2025-08-06",note:"Extracted from the Crestline onboarding gate."},{version:"1.2.0",date:"2026-02-14",note:"Pre-adverse wait now tracked in business days."},{version:"1.3.0",date:"2026-04-27",note:"Added county-court delay reason codes."}],usedBy:["ag-onboarding","ag-screener"],tests:"14 unit cases; covered by the es-onboarding regression suite",code:`export const backgroundCheckGate = createTool({
  id: "background-check-gate",
  description: "Hold onboarding until check results clear; adverse findings route to HR per the FCRA pack.",
  inputSchema: z.object({ hireId: z.string() }),
  outputSchema: z.object({ cleared: z.boolean(), route: z.string() }),
  execute: async ({ context }) => gateOnCheck(context.hireId),
});`},{id:"pr-078",name:"onboarding-task-sequencer",category:"Agent tools",version:"1.7.0",origin:"Meridian Group, 2026-Q1",reuse:7,deps:["okta-scim-provisioner","docusign-envelope-sender"],dependents:6,lastModified:"2026-07-01",mechanism:"Builds the day-by-day task plan from start date, role profile, and worksite state: provisioning, forms, training, and buddy assignment, each with an owner and due date.",schema:[{field:"hireId",type:"string",constraints:"pattern: ^gh-[0-9]{8}$",dir:"in"},{field:"roleProfile",type:"string",constraints:"enum: clinical|corporate|manufacturing|field",dir:"in"},{field:"tasks[]",type:"object[]",constraints:"title, owner, dueDate ISO 8601, kind",dir:"out"},{field:"provisioningDate",type:"string",constraints:"ISO 8601 date, start minus 3 business days",dir:"out"},{field:"packetSent",type:"boolean",constraints:"true when the disclosure packet staged",dir:"out"}],scopes:[{connector:"Okta",scope:"SCIM provisioning"},{connector:"DocuSign",scope:"eSignature: Envelopes (create)"}],failure:["Start date slips re-date every open task; completed tasks are only reopened when date-bound.","Role profiles without a task template fall back to corporate plus a gap note to the coordinator."],changelog:[{version:"1.0.0",date:"2026-01-27",note:"Built for the Meridian onboarding concierge."},{version:"1.6.0",date:"2026-04-22",note:"State disclosure forms folded in from the packet flow."},{version:"1.7.0",date:"2026-07-01",note:"Buddy assignment added from the org's buddy roster."}],usedBy:["ag-onboarding"],tests:"15 unit cases; covered by the es-onboarding regression suite",code:`export const onboardingTaskSequencer = createTool({
  id: "onboarding-task-sequencer",
  description: "Sequence provisioning, forms, and training tasks from start date and role.",
  inputSchema: z.object({ hireId: z.string(), roleProfile: z.string() }),
  outputSchema: z.object({ tasks: z.array(taskSchema) }),
  execute: async ({ context }) => sequenceTasks(context.hireId, context.roleProfile),
});`},{id:"pr-079",name:"term-checklist-generator",category:"Agent tools",version:"2.1.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:["workday-bp-event-listener"],dependents:7,lastModified:"2026-07-23",mechanism:"Generates the termination checklist from state, role, and the worker's actual system footprint (queried, not assumed), with owners and deadlines keyed to the term date.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"termDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"reason",type:"string",constraints:"enum: voluntary|involuntary|reduction|end-of-contract",dir:"in"},{field:"items[]",type:"object[]",constraints:"title, owner, dueBy ISO 8601, systemRef",dir:"out"},{field:"finalPayDeadline",type:"string",constraints:"ISO 8601 date per the state rule",dir:"out"},{field:"systemsFound",type:"number",constraints:"integer, footprint size",dir:"out"}],scopes:[{connector:"Workday",scope:"Worker Data: Worker (Get)"},{connector:"Okta",scope:"Users API lifecycle: deactivate, suspend"},{connector:"UKG Pro WFM",scope:"Employee changes read (service account)"}],failure:["Footprint entries with no owning team attach to IT triage instead of dropping off the list.","Involuntary CA terms set the final-pay deadline to the term date itself and mark the checklist same-day.","Term date changes regenerate the checklist and diff against already-completed items."],changelog:[{version:"1.0.0",date:"2025-03-05",note:"Extracted from the Beacon offboarding runbook."},{version:"2.0.0",date:"2026-03-18",note:"Checklist keys on the queried system footprint instead of the role template."},{version:"2.1.0",date:"2026-07-23",note:"Added WARN-adjacent tasks for reduction events."}],usedBy:["ag-offboarding"],tests:"25 unit cases; covered by the es-offboarding regression suite",code:`export const termChecklistGenerator = createTool({
  id: "term-checklist-generator",
  description: "Generate a termination checklist keyed to state, role, and system footprint.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    termDate: z.string().date(),
    reason: z.enum(["voluntary", "involuntary", "reduction", "end-of-contract"]),
  }),
  outputSchema: z.object({
    items: z.array(z.object({
      title: z.string(),
      owner: z.string(),
      dueBy: z.string().date(),
      systemRef: z.string().nullable(),
    })),
    finalPayDeadline: z.string().date(),
    systemsFound: z.number().int(),
  }),
  execute: async ({ context }) => {
    const worker = await workday.soap.humanResources.getWorkers({ employeeId: context.employeeId });
    const footprint = await accessInventory.query(context.employeeId);
    const rules = await packs.finalPayRules(worker.state, context.reason);
    const items = buildChecklist({ worker, footprint, rules, termDate: context.termDate });
    for (const orphan of footprint.unowned) items.push(itTriageItem(orphan, context.termDate));
    return { items, finalPayDeadline: rules.deadlineFor(context.termDate), systemsFound: footprint.systems.length };
  },
});`},{id:"pr-080",name:"access-revocation-verifier",category:"Agent tools",version:"2.3.1",origin:"Oneward Core, 2024-Q3",reuse:8,deps:["okta-lifecycle-deactivate","msgraph-user-disable"],dependents:8,lastModified:"2026-07-31",mechanism:"Re-queries every system in the access inventory after the revocation cascade and records per-system evidence (API response, timestamp) so the term case closes on proof, not intent.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"termCaseId",type:"string",constraints:"pattern: ^tc-[0-9]{6}$",dir:"in"},{field:"verified[]",type:"object[]",constraints:"system + evidenceRef per row",dir:"out"},{field:"outstanding[]",type:"object[]",constraints:"system, reason, retryAt ISO 8601 datetime",dir:"out"},{field:"evidenceBundleKey",type:"string",constraints:"S3 WORM object key",dir:"out"}],scopes:[{connector:"Okta",scope:"Users API lifecycle: deactivate, suspend"},{connector:"Microsoft Graph (Entra ID)",scope:"User.Read.All (Graph scope)"},{connector:"S3 evidence store",scope:"evidence/ prefix (write, object lock)"}],failure:["Systems still showing active access after 2 re-checks escalate to IT security with the term case link.","Okta HTTP 429 backs off per Retry-After; a system is never marked revoked without a fresh read.","Evidence write failures block case close; the WORM write retries before anything else proceeds."],changelog:[{version:"1.0.0",date:"2024-09-26",note:"Part of the original offboarding core."},{version:"2.3.0",date:"2026-05-30",note:"Added the Graph session-revocation check alongside account disable."},{version:"2.3.1",date:"2026-07-31",note:"Fixed false-positive on Okta users already suspended before the cascade."}],usedBy:["ag-offboarding"],tests:"24 unit cases; covered by the es-offboarding regression suite",code:`export const accessRevocationVerifier = createTool({
  id: "access-revocation-verifier",
  description: "Verify every system in the access inventory was actually revoked, with evidence.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    termCaseId: z.string().regex(/^tc-[0-9]{6}$/),
  }),
  outputSchema: z.object({
    verified: z.array(z.object({ system: z.string(), evidenceRef: z.string() })),
    outstanding: z.array(z.object({ system: z.string(), reason: z.string(), retryAt: z.string() })),
    evidenceBundleKey: z.string(),
  }),
  execute: async ({ context }) => {
    const inventory = await accessInventory.query(context.employeeId);
    const checks = await Promise.all(inventory.systems.map((s) => reQuery(s, context.employeeId)));
    const verified = checks.filter((c) => c.revoked).map(toEvidence);
    const outstanding = checks.filter((c) => !c.revoked).map(toRetry);
    if (outstanding.length > 0 && checks.every((c) => c.attempts >= 2)) escalateItSec(context.termCaseId, outstanding);
    const key = await evidence.writeBundle(context.termCaseId, verified);
    return { verified, outstanding, evidenceBundleKey: key };
  },
});`},{id:"pr-081",name:"final-pay-rules-checker",category:"Agent tools",version:"1.5.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ps-ca-finalpay","ps-tx-payday"],dependents:5,lastModified:"2026-06-24",mechanism:"Looks up the worker's state final-pay rule (CA same day for involuntary, TX 6th day, and so on), computes the due date from term date and reason, and lists what the final check must include.",schema:[{field:"employeeId",type:"string",constraints:"pattern: ^(MER|LKS)-[0-9]{5}$",dir:"in"},{field:"termDate",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"reason",type:"string",constraints:"enum: voluntary|involuntary",dir:"in"},{field:"dueBy",type:"string",constraints:"ISO 8601 date per the state rule",dir:"out"},{field:"mustInclude[]",type:"string[]",constraints:"accrued PTO payout, commissions, reimbursements per pack",dir:"out"},{field:"penaltyExposure",type:"string",constraints:"waiting-time penalty description, nullable",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: final pay (read, current versions)"},{connector:"UKG Pro WFM",scope:"Personnel: accrual balances (Get)"}],failure:["States without a final-pay pack return the federal default and flag the gap to counsel.","Voluntary CA resignations with under 72 hours notice recompute the deadline per Labor Code 202 instead of using a cached rule."],changelog:[{version:"1.0.0",date:"2025-04-09",note:"Extracted from the Beacon termination runbook."},{version:"1.4.0",date:"2026-02-05",note:"Added commission and bonus inclusion rules per state."},{version:"1.5.0",date:"2026-06-24",note:"Waiting-time penalty exposure itemized per day."}],usedBy:["ag-offboarding","ag-payroll-audit"],tests:"23 unit cases; covered by the es-offboarding regression suite",code:`export const finalPayRulesChecker = createTool({
  id: "final-pay-rules-checker",
  description: "Check final pay timing and required inclusions for the worker's state pack.",
  inputSchema: z.object({
    employeeId: z.string().regex(/^(MER|LKS)-[0-9]{5}$/),
    termDate: z.string().date(),
    state: z.enum(["CA", "NY", "TX", "WA", "CO", "IL", "NJ", "MA", "FL", "GA"]),
    reason: z.enum(["voluntary", "involuntary"]),
  }),
  outputSchema: z.object({
    dueBy: z.string().date(),
    mustInclude: z.array(z.string()),
    penaltyExposure: z.string().nullable(),
  }),
  execute: async ({ context }) => {
    const pack = await library.finalPayPack(context.state);
    if (!pack) return federalDefault(context, { flag: "no state final-pay pack" });
    const notice = await hrCases.resignationNotice(context.employeeId);
    const dueBy = pack.deadline(context.termDate, context.reason, notice);
    const accruals = await ukg.get("/personnel/v1/accrual-balances", { employeeId: context.employeeId });
    return { dueBy, mustInclude: pack.inclusions(accruals), penaltyExposure: pack.waitingTimePenalty() };
  },
});`},{id:"pr-082",name:"policy-passage-retriever",category:"Agent tools",version:"3.2.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:12,lastModified:"2026-08-01",mechanism:"Runs hybrid retrieval (BM25 plus embeddings) over current pack versions only, returning each passage with pack id, version, effective date, and section anchor so downstream answers can cite.",schema:[{field:"query",type:"string",constraints:"1-500 chars",dir:"in"},{field:"jurisdiction",type:"string",constraints:"optional; enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA|federal",dir:"in"},{field:"topK",type:"number",constraints:"integer 1-20, default 6",dir:"in"},{field:"passages[]",type:"object[]",constraints:"text, packId, version, effectiveDate ISO 8601, sectionAnchor, score",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: all domains (read, current versions)"}],failure:["Zero hits above the floor score returns empty; agents must say they cannot cite rather than answer anyway.","Superseded pack versions are excluded at the index level; a stale hit is a build error, not a runtime path.","Jurisdiction filter with no packs returns the coverage-gap marker for the agent to surface."],changelog:[{version:"2.8.0",date:"2026-03-24",note:"Added section anchors for deep links."},{version:"3.0.0",date:"2026-06-10",note:"Index rebuilt per pack version; superseded text can no longer surface."},{version:"3.2.0",date:"2026-08-01",note:"Hybrid scoring reweighted for statute headings."}],usedBy:["ag-helpdesk","ag-leave","ag-pay-compliance"],tests:"33 unit cases; covered by the es-helpdesk regression suite",code:`export const policyPassageRetriever = createTool({
  id: "policy-passage-retriever",
  description: "Retrieve Policy Library passages with pack id, version, and effective date attached.",
  inputSchema: z.object({
    query: z.string().min(1).max(500),
    jurisdiction: z.enum(["CA", "NY", "TX", "WA", "CO", "IL", "NJ", "MA", "FL", "GA", "federal"]).optional(),
    topK: z.number().int().min(1).max(20).default(6),
  }),
  outputSchema: z.object({
    passages: z.array(z.object({
      text: z.string(),
      packId: z.string(),
      version: z.string(),
      effectiveDate: z.string().date(),
      sectionAnchor: z.string(),
      score: z.number(),
    })),
  }),
  execute: async ({ context }) => {
    const index = await library.currentIndex();
    const hits = await index.hybridSearch(context.query, { jurisdiction: context.jurisdiction, topK: context.topK });
    const passages = hits.filter((h) => h.score >= FLOOR_SCORE);
    return { passages: passages.map(withCitationFields) };
  },
});`},{id:"pr-083",name:"handbook-conflict-detector",category:"Agent tools",version:"1.4.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["policy-passage-retriever"],dependents:4,lastModified:"2026-06-02",mechanism:"Aligns handbook sections against current statute packs clause by clause and reports where the handbook is weaker, stricter, or silent, quoting both passages.",schema:[{field:"handbookPackId",type:"string",constraints:"pattern: ^pk-hb-[a-z0-9-]+$",dir:"in"},{field:"statutePackIds[]",type:"string[]",constraints:"min 1, current versions only",dir:"in"},{field:"conflicts[]",type:"object[]",constraints:"handbookSection, statuteSection, kind enum: weaker|stricter|silent, quote pair",dir:"out"},{field:"reviewedSections",type:"number",constraints:"integer, sections compared",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: all domains (read, current versions)"}],failure:["Sections with no statute counterpart report silent instead of forcing a match.","Handbook packs in pending-review status reject the run until the version settles."],changelog:[{version:"1.0.0",date:"2026-02-18",note:"Built for the Meridian handbook review."},{version:"1.3.0",date:"2026-04-13",note:"Stricter-than-statute now reports separately from weaker."},{version:"1.4.0",date:"2026-06-02",note:"Quote pairs trimmed to the governing clause."}],usedBy:["ag-pay-compliance","ag-helpdesk"],tests:"15 unit cases; covered by the es-pay-compliance regression suite",code:`export const handbookConflictDetector = createTool({
  id: "handbook-conflict-detector",
  description: "Find handbook passages that conflict with current statute packs.",
  inputSchema: z.object({ handbookPackId: z.string(), statutePackIds: z.array(z.string()) }),
  outputSchema: z.object({ conflicts: z.array(conflictSchema) }),
  execute: async ({ context }) => detectConflicts(context.handbookPackId, context.statutePackIds),
});`},{id:"pr-084",name:"citation-formatter",category:"Agent tools",version:"2.8.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:["policy-passage-retriever"],dependents:11,lastModified:"2026-07-25",mechanism:"Converts retrieved passages into inline citation chips with source label, pack id, and effective date, deduplicating repeats and reporting any answer sentence that lacks support.",schema:[{field:"passages[]",type:"Passage[]",constraints:"min 1, from policy-passage-retriever",dir:"in"},{field:"answerDraft",type:"string",constraints:"the sentence-level draft to check",dir:"in"},{field:"citations[]",type:"object[]",constraints:"label, sourceId, effectiveDate ISO 8601",dir:"out"},{field:"uncitedSentences[]",type:"string[]",constraints:"sentences with no supporting passage",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: source labels (read)"}],failure:["Sentences with no supporting passage return in uncitedSentences[]; the agent revises or escalates.","Passages from superseded versions reject at format time, a second guard behind the retriever."],changelog:[{version:"2.0.0",date:"2025-07-23",note:"Chip format unified across chat and document surfaces."},{version:"2.7.0",date:"2026-05-19",note:"Dedupe by pack + section, keeping the earliest anchor."},{version:"2.8.0",date:"2026-07-25",note:"Added uncited-sentence detection."}],usedBy:["ag-helpdesk","ag-leave","ag-pay-compliance"],tests:"20 unit cases; covered by the es-helpdesk regression suite",code:`export const citationFormatter = createTool({
  id: "citation-formatter",
  description: "Format retrieved passages into inline citations with pack id and effective date.",
  inputSchema: z.object({ passages: z.array(passageSchema) }),
  outputSchema: z.object({ citations: z.array(citationSchema) }),
  execute: async ({ context }) => formatCitations(context.passages),
});`},{id:"pr-085",name:"pii-redactor",category:"Agent tools",version:"2.4.0",origin:"Oneward Core, 2024-Q3",reuse:8,deps:[],dependents:10,lastModified:"2026-07-10",mechanism:"Masks direct identifiers (SSN, DOB, bank details, home address, names in strict profile) with typed placeholders before text crosses the trust boundary, keeping the entity map server-side for re-hydration.",schema:[{field:"text",type:"string",constraints:"<= 32000 chars",dir:"in"},{field:"profile",type:"string",constraints:"enum: strict|analytics",dir:"in"},{field:"redacted",type:"string",constraints:"typed placeholders, e.g. [SSN-1]",dir:"out"},{field:"entitiesFound[]",type:"object[]",constraints:"entity type + count per type",dir:"out"}],scopes:[{connector:"Oneward runtime",scope:"trust boundary egress filter"}],failure:["Detection below the recall floor on the canary set blocks deploy; runtime falls back to the prior model.","Unknown identifier formats over-mask on suspicion in the strict profile."],changelog:[{version:"2.0.0",date:"2025-06-18",note:"Typed placeholders replaced generic masks."},{version:"2.3.0",date:"2026-03-31",note:"Added bank account and routing detection for garnishment text."},{version:"2.4.0",date:"2026-07-10",note:"Strict profile now masks person names in free text."}],usedBy:["ag-helpdesk","ag-screener","ag-retention"],tests:"30 unit cases; covered by the es-helpdesk regression suite",code:`export const piiRedactor = createTool({
  id: "pii-redactor",
  description: "Redact direct identifiers before text leaves the trust boundary.",
  inputSchema: z.object({ text: z.string(), profile: z.enum(["strict", "analytics"]) }),
  outputSchema: z.object({ redacted: z.string(), entitiesFound: z.array(z.string()) }),
  execute: async ({ context }) => redact(context.text, context.profile),
});`},{id:"pr-086",name:"policy-pack-resolver",category:"Agent tools",version:"1.1.0",origin:"Oneward Core, 2026-Q2",reuse:4,deps:[],dependents:5,lastModified:"2026-07-26",mechanism:"Resolves which packs govern a question from work state and domain via the coverage matrix, returning the strictest applicable pack first with federal fallbacks appended.",schema:[{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"domain",type:"string",constraints:"enum: leave|wage-hour|final-pay|transparency|onboarding",dir:"in"},{field:"packIds[]",type:"string[]",constraints:"ordered strictest first, federal appended",dir:"out"},{field:"strictest",type:"string",constraints:"nullable pack id",dir:"out"},{field:"coverage",type:"string",constraints:"enum: complete|partial|missing",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Coverage matrix (read)"}],failure:["Missing coverage returns coverage: missing and no packIds; agents surface the gap instead of answering.","Ties on strictness order deterministically by effective date, newest first."],changelog:[{version:"1.0.0",date:"2026-05-27",note:"Split out of the retriever so agents resolve before they search."},{version:"1.1.0",date:"2026-07-26",note:"Added the onboarding domain."}],usedBy:["ag-pay-compliance","ag-helpdesk"],tests:"13 unit cases; covered by the es-pay-compliance regression suite",code:`export const policyPackResolver = createTool({
  id: "policy-pack-resolver",
  description: "Resolve which Policy Library packs govern a question from work state and domain; returns the strictest applicable pack first.",
  inputSchema: z.object({
    state: z.string().length(2),
    domain: z.enum(["leave", "wage-hour", "final-pay", "transparency", "onboarding"]),
  }),
  outputSchema: z.object({ packIds: z.array(z.string()), strictest: z.string().nullable() }),
  execute: async ({ context }) => library.resolve(context.state, context.domain),
});`},{id:"pr-087",name:"min-wage-rate-lookup",category:"Agent tools",version:"1.0.2",origin:"Oneward Core, 2026-Q2",reuse:3,deps:["ps-wage-hour"],dependents:3,lastModified:"2026-07-13",mechanism:"Returns the applicable minimum wage for a worksite by layering city and county ordinances over the state rate as of a given date, naming the governing source.",schema:[{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"city",type:"string",constraints:"optional, ordinance table key",dir:"in"},{field:"asOf",type:"string",constraints:"ISO 8601 date (YYYY-MM-DD)",dir:"in"},{field:"hourlyRateCents",type:"number",constraints:"integer cents, USD",dir:"out"},{field:"source",type:"string",constraints:"ordinance or statute name",dir:"out"},{field:"localOrdinanceApplies",type:"boolean",constraints:"true when a local rate governs",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: ps-wage-hour (read)"}],failure:["Cities absent from the ordinance table fall back to the state rate with localOrdinanceApplies false.","asOf dates beyond published schedules return the last published rate marked provisional."],changelog:[{version:"1.0.0",date:"2026-05-13",note:"Extracted from pay-compliance answer flows."},{version:"1.0.2",date:"2026-07-13",note:"July 2026 ordinance updates for 14 cities."}],usedBy:["ag-pay-compliance"],tests:"12 unit cases; covered by the es-pay-compliance regression suite",code:`export const minWageRateLookup = createTool({
  id: "min-wage-rate-lookup",
  description: "Look up the applicable minimum wage for a worksite, layering local ordinances over the state rate.",
  inputSchema: z.object({ state: z.string().length(2), city: z.string().optional(), asOf: z.string() }),
  outputSchema: z.object({ hourlyRate: z.number(), source: z.string(), localOrdinanceApplies: z.boolean() }),
  execute: async ({ context }) => wageTable.lookup(context.state, context.city, context.asOf),
});`},{id:"pr-088",name:"onboarding-disclosure-selector",category:"Agent tools",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:3,deps:["pk-onb-ca","pk-onb-ny"],dependents:2,lastModified:"2026-07-07",mechanism:"Selects the state-required onboarding disclosures (wage theft notices, sick leave notices, required posters) from work state and FLSA classification, each with its form id and deadline.",schema:[{field:"state",type:"string",constraints:"enum: CA|NY|TX|WA|CO|IL|NJ|MA|FL|GA",dir:"in"},{field:"flsaStatus",type:"string",constraints:"enum: exempt|non-exempt",dir:"in"},{field:"disclosures[]",type:"object[]",constraints:"packId, form id, deadline relative to start date",dir:"out"}],scopes:[{connector:"Policy Library",scope:"Packs: onboarding (read, current versions)"}],failure:["States without an onboarding pack return the federal-only set and flag the gap.","Classification changes before day 1 re-run selection and diff the packet."],changelog:[{version:"0.9.0",date:"2026-06-12",note:"Pilot on CA and NY packets."},{version:"1.0.0",date:"2026-07-07",note:"Extracted from the Meridian state packet flow."}],usedBy:["ag-onboarding"],tests:"11 unit cases; covered by the es-onboarding regression suite",code:`export const onboardingDisclosureSelector = createTool({
  id: "onboarding-disclosure-selector",
  description: "Select the state onboarding disclosures a new hire must receive from work state and classification.",
  inputSchema: z.object({ state: z.string().length(2), flsaStatus: z.enum(["exempt", "non-exempt"]) }),
  outputSchema: z.object({
    disclosures: z.array(z.object({ packId: z.string(), form: z.string(), deadline: z.string() })),
  }),
  execute: async ({ context }) => selector.forState(context.state, context.flsaStatus),
});`},{id:"pr-089",name:"leave-plan-approval-flow",category:"Workflow templates",version:"2.2.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["state-leave-sequencer","leave-eligibility-evaluator"],dependents:3,lastModified:"2026-07-21",usedBy:["ag-leave"],steps:[{n:1,title:"Pull request context",kind:"deterministic",detail:"Case fields, work state, hours history from UKG, tenure from the HCM of record."},{n:2,title:"Evaluate program eligibility",kind:"deterministic",detail:"leave-eligibility-evaluator returns per-program verdicts with pack citations."},{n:3,title:"Sequence segments",kind:"deterministic",detail:"state-leave-sequencer orders PDL, FMLA, CFRA, PFL with pay and protection."},{n:4,title:"Draft the plan narrative",kind:"model",detail:"Plain-language summary; every claim carries a citation chip."},{n:5,title:"LOA specialist approval",kind:"human-gate",detail:"Plan and citations reviewed; edits return to step 3."},{n:6,title:"Write plan and notify",kind:"deterministic",detail:"Plan recorded, employee packet sent, calendar holds placed."}],code:`export const leavePlanApprovalFlow = createWorkflow({
  id: "leave-plan-approval-flow",
  inputSchema: z.object({ requestId: z.string() }),
})
  .then(evaluateEligibilityStep)
  .then(sequenceSegmentsStep)
  .then(draftPlanStep)
  .then(humanApprovalStep)
  .commit();`},{id:"pr-090",name:"pre-run-audit-cycle",category:"Workflow templates",version:"2.0.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:["payroll-variance-detector","variance-explainer"],dependents:4,lastModified:"2026-07-26",usedBy:["ag-payroll-audit"],steps:[{n:1,title:"Snapshot staged inputs",kind:"deterministic",detail:"ADP staged batch plus the prior 6 periods as baseline."},{n:2,title:"Detect out-of-band deltas",kind:"deterministic",detail:"payroll-variance-detector applies the tolerance from run config."},{n:3,title:"Explain each flag",kind:"model",detail:"variance-explainer writes the driver narrative with amounts."},{n:4,title:"Bundle findings",kind:"deterministic",detail:"Waterfall, flag list, and evidence links assembled into the audit packet."},{n:5,title:"Payroll manager sign-off",kind:"human-gate",detail:"Release the batch or hold flagged entries; the decision is recorded with the packet."}],code:`export const preRunAuditCycle = createWorkflow({
  id: "pre-run-audit-cycle",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
})
  .then(stageInputsStep)
  .then(detectVariancesStep)
  .then(explainFlagsStep)
  .then(signoffStep)
  .commit();`},{id:"pr-091",name:"posting-compliance-draft",category:"Workflow templates",version:"1.8.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:["posting-jurisdiction-resolver","range-goodfaith-checker"],dependents:2,lastModified:"2026-07-13",usedBy:["ag-pay-compliance","ag-screener"],steps:[{n:1,title:"Resolve jurisdictions",kind:"deterministic",detail:"posting-jurisdiction-resolver from worksites and remote reach."},{n:2,title:"Check range good faith",kind:"deterministic",detail:"range-goodfaith-checker against band, incumbents, and recent offers."},{n:3,title:"Draft compliant posting language",kind:"model",detail:"Range, benefits summary, and required disclosures per the strictest pack."},{n:4,title:"Recruiting lead review",kind:"human-gate",detail:"Publishes to Greenhouse on approval."}],code:`export const postingComplianceDraft = createWorkflow({
  id: "posting-compliance-draft",
  inputSchema: z.object({ jobId: z.number() }),
})
  .then(resolveJurisdictionsStep)
  .then(checkRangeStep)
  .then(draftPostingStep)
  .commit();`},{id:"pr-092",name:"termination-cascade",category:"Workflow templates",version:"2.4.0",origin:"Beacon Logistics, 2025-Q1",reuse:6,deps:["term-checklist-generator","access-revocation-verifier","final-pay-rules-checker"],dependents:3,lastModified:"2026-07-29",usedBy:["ag-offboarding"],steps:[{n:1,title:"Generate the checklist",kind:"deterministic",detail:"term-checklist-generator keys items to state, role, and the queried footprint."},{n:2,title:"HR approves the cascade",kind:"human-gate",detail:"Term case, date, and checklist confirmed before any access change."},{n:3,title:"Revoke identity access",kind:"deterministic",detail:"Okta deactivate plus Graph account disable and session revocation."},{n:4,title:"Verify every revocation",kind:"deterministic",detail:"access-revocation-verifier re-queries each system and stores evidence."},{n:5,title:"Final pay check",kind:"deterministic",detail:"final-pay-rules-checker computes the state deadline and inclusions."},{n:6,title:"Close-out summary",kind:"model",detail:"Case note with evidence links drafted for the HRBP."}],code:`export const terminationCascade = createWorkflow({
  id: "termination-cascade",
  inputSchema: z.object({ employeeId: z.string(), termDate: z.string() }),
})
  .then(generateChecklistStep)
  .then(revokeAccessStep)
  .then(verifyRevocationStep)
  .then(finalPayCheckStep)
  .commit();`},{id:"pr-093",name:"new-hire-onboarding-cascade",category:"Workflow templates",version:"1.9.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["onboarding-task-sequencer","okta-scim-provisioner"],dependents:2,lastModified:"2026-06-29",usedBy:["ag-onboarding"],steps:[{n:1,title:"Sequence tasks",kind:"deterministic",detail:"onboarding-task-sequencer builds the day-by-day plan from start date and role."},{n:2,title:"Provision accounts",kind:"deterministic",detail:"SCIM provisioning from the approved role template at start minus 3 business days."},{n:3,title:"Draft the welcome packet",kind:"model",detail:"Role-specific day-1 note; the forms list comes from the disclosure selector."},{n:4,title:"Send packet and track receipt",kind:"deterministic",detail:"DocuSign envelope tracked to completion."},{n:5,title:"Coordinator day-1 check",kind:"human-gate",detail:"Badge, manager intro, and equipment confirmed before the case closes."}],code:`export const newHireOnboardingCascade = createWorkflow({
  id: "new-hire-onboarding-cascade",
  inputSchema: z.object({ hireId: z.string() }),
})
  .then(sequenceTasksStep)
  .then(provisionAccountsStep)
  .then(sendWelcomePacketStep)
  .commit();`},{id:"pr-094",name:"payroll-close-checklist",category:"Workflow templates",version:"1.5.0",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["pay-period-reconciler"],dependents:2,lastModified:"2026-06-12",usedBy:["ag-payroll-audit"],steps:[{n:1,title:"Reconcile events against inputs",kind:"deterministic",detail:"pay-period-reconciler joins HCM changes to staged entries."},{n:2,title:"Propose matches for unmatched rows",kind:"model",detail:"Ranked candidate matches with the evidence behind each."},{n:3,title:"Resolve remaining exceptions",kind:"human-gate",detail:"Payroll analyst accepts, edits, or defers each row."},{n:4,title:"Record the close attestation",kind:"deterministic",detail:"Attestation stored with the reconciliation packet."}],code:`export const payrollCloseChecklist = createWorkflow({
  id: "payroll-close-checklist",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
})
  .then(reconcilePeriodStep)
  .then(resolveUnmatchedStep)
  .then(closeAttestationStep)
  .commit();`},{id:"pr-095",name:"off-cycle-payment-approval",category:"Workflow templates",version:"1.3.1",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["off-cycle-check-drafter"],dependents:1,lastModified:"2026-05-18",usedBy:["ag-payroll-audit"],steps:[{n:1,title:"Validate the reason code",kind:"deterministic",detail:"Reason must map to an ADP earning code; amount checked against the 25,000 USD cap."},{n:2,title:"Manager approval",kind:"human-gate",detail:"Second approver required above 10,000 USD."},{n:3,title:"Stage the payment",kind:"deterministic",detail:"Entry staged through the Payroll Input use case, never committed directly."},{n:4,title:"Archive the evidence",kind:"deterministic",detail:"Draft, approvals, and staging response bundled to WORM storage."}],code:`export const offCyclePaymentApproval = createWorkflow({
  id: "off-cycle-payment-approval",
  inputSchema: z.object({ draftId: z.string() }),
})
  .then(validateReasonCodeStep)
  .then(managerApprovalStep)
  .then(stagePaymentStep)
  .commit();`},{id:"pr-096",name:"garnishment-intake-flow",category:"Workflow templates",version:"1.2.0",origin:"Beacon Logistics, 2025-Q1",reuse:3,deps:["garnishment-order-parser"],dependents:1,lastModified:"2026-04-24",usedBy:["ag-payroll-audit"],steps:[{n:1,title:"Parse the scanned order",kind:"model",detail:"garnishment-order-parser extracts type, amounts, and priority with a confidence score."},{n:2,title:"Confidence gate",kind:"deterministic",detail:"Below 0.85 the draft parks for verification; at or above, it proceeds."},{n:3,title:"Specialist verification",kind:"human-gate",detail:"Extraction shown side by side with the document."},{n:4,title:"Set up the deduction draft",kind:"deterministic",detail:"Deduction staged per CCPA limits, effective next open period."}],code:`export const garnishmentIntakeFlow = createWorkflow({
  id: "garnishment-intake-flow",
  inputSchema: z.object({ documentUrl: z.string() }),
})
  .then(parseOrderStep)
  .then(confidenceGateStep)
  .then(setupDeductionDraftStep)
  .commit();`},{id:"pr-097",name:"merit-cycle-orchestrator",category:"Workflow templates",version:"1.6.0",origin:"Meridian Group, 2026-Q1",reuse:4,deps:["merit-matrix-applier","comp-band-placement-checker"],dependents:2,lastModified:"2026-07-05",usedBy:["ag-comp"],steps:[{n:1,title:"Apply the merit matrix",kind:"deterministic",detail:"merit-matrix-applier stages proposals by rating and compa-ratio quartile."},{n:2,title:"Band and compa-ratio check",kind:"deterministic",detail:"comp-band-placement-checker flags out-of-band placements."},{n:3,title:"Draft exception rationales",kind:"model",detail:"One paragraph per out-of-matrix proposal for the manager packet."},{n:4,title:"Manager review wave",kind:"human-gate",detail:"Managers accept or adjust inside their budget envelope."},{n:5,title:"Stage writeback drafts",kind:"deterministic",detail:"Approved increases staged for the Workday batch, behind Approvals."}],code:`export const meritCycleOrchestrator = createWorkflow({
  id: "merit-cycle-orchestrator",
  inputSchema: z.object({ cycleId: z.string() }),
})
  .then(applyMatrixStep)
  .then(bandCheckStep)
  .then(managerReviewStep)
  .then(batchWritebackStep)
  .commit();`},{id:"pr-098",name:"comp-change-approval-flow",category:"Workflow templates",version:"1.4.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["workday-comp-writeback"],dependents:2,lastModified:"2026-06-20",usedBy:["ag-comp","ag-manager"],steps:[{n:1,title:"Placement check",kind:"deterministic",detail:"Band, compa-ratio, and geo tier validated before routing."},{n:2,title:"Two approvers outside the requester chain",kind:"human-gate",detail:"Both approvals recorded with rationale."},{n:3,title:"Stage the draft event",kind:"deterministic",detail:"Request lands as a draft business process in Workday, never a direct write."}],code:`export const compChangeApprovalFlow = createWorkflow({
  id: "comp-change-approval-flow",
  inputSchema: z.object({ employeeId: z.string(), proposed: z.number() }),
})
  .then(placementCheckStep)
  .then(twoStepApprovalStep)
  .then(stageDraftEventStep)
  .commit();`},{id:"pr-099",name:"offer-approval-chain",category:"Workflow templates",version:"1.7.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:["offer-letter-assembler","offer-comp-benchmarker"],dependents:2,lastModified:"2026-07-07",usedBy:["ag-screener"],steps:[{n:1,title:"Benchmark the offer",kind:"deterministic",detail:"offer-comp-benchmarker places it against band, peers, and the posted range."},{n:2,title:"Recruiting lead approval",kind:"human-gate",detail:"Offers above the posted max cannot be approved here."},{n:3,title:"Assemble the letter",kind:"deterministic",detail:"offer-letter-assembler pulls approved clauses and jurisdiction addenda."},{n:4,title:"Draft the candidate note",kind:"model",detail:"Short personal cover message for the recruiter to edit."},{n:5,title:"Send for signature",kind:"deterministic",detail:"DocuSign envelope with status tracked back to Greenhouse."}],code:`export const offerApprovalChain = createWorkflow({
  id: "offer-approval-chain",
  inputSchema: z.object({ applicationId: z.number() }),
})
  .then(benchmarkOfferStep)
  .then(recruitingLeadApprovalStep)
  .then(assembleLetterStep)
  .then(sendForSignatureStep)
  .commit();`},{id:"pr-100",name:"req-to-posting-pipeline",category:"Workflow templates",version:"1.5.2",origin:"Crestline Foods, 2025-Q2",reuse:4,deps:["req-intake-normalizer","greenhouse-job-post-publisher"],dependents:2,lastModified:"2026-06-15",usedBy:["ag-screener"],steps:[{n:1,title:"Normalize the intake",kind:"model",detail:"req-intake-normalizer structures job code, level, and locations from free text."},{n:2,title:"Run the compliance draft",kind:"deterministic",detail:"posting-compliance-draft resolves jurisdictions and checks the range."},{n:3,title:"Hiring manager confirmation",kind:"human-gate",detail:"Scope and level confirmed before anything posts."},{n:4,title:"Publish the posting",kind:"deterministic",detail:"greenhouse-job-post-publisher flips the post live under On-Behalf-Of."}],code:`export const reqToPostingPipeline = createWorkflow({
  id: "req-to-posting-pipeline",
  inputSchema: z.object({ intakeText: z.string() }),
})
  .then(normalizeIntakeStep)
  .then(complianceDraftStep)
  .then(publishDraftStep)
  .commit();`},{id:"pr-101",name:"interview-feedback-chase",category:"Workflow templates",version:"1.1.0",origin:"Crestline Foods, 2025-Q2",reuse:3,deps:["slack-events-bridge"],dependents:1,lastModified:"2026-05-09",usedBy:["ag-screener"],steps:[{n:1,title:"Find missing scorecards",kind:"deterministic",detail:"Interview kits past due by 24 hours."},{n:2,title:"Draft the nudge",kind:"model",detail:"Short personal reminder naming the candidate and round."},{n:3,title:"Send via Slack",kind:"deterministic",detail:"DM with the scorecard deep link; second nudge at 48 hours."},{n:4,title:"Escalate after 2 nudges",kind:"deterministic",detail:"Hiring manager notified with the outstanding list."}],code:`export const interviewFeedbackChase = createWorkflow({
  id: "interview-feedback-chase",
  inputSchema: z.object({ applicationId: z.number() }),
})
  .then(findMissingScorecardsStep)
  .then(nudgeInterviewersStep)
  .then(escalateAfterTwoNudgesStep)
  .commit();`},{id:"pr-102",name:"requisition-close-flow",category:"Workflow templates",version:"1.0.2",origin:"Crestline Foods, 2025-Q2",reuse:2,deps:["greenhouse-harvest-client"],dependents:0,lastModified:"2026-03-27",usedBy:["ag-screener"],steps:[{n:1,title:"Reject remaining candidates",kind:"deterministic",detail:"Stage-appropriate reason codes applied per candidate."},{n:2,title:"Draft rejection notes",kind:"model",detail:"Personalized notes for finalists; template for early stages."},{n:3,title:"Recruiter confirmation",kind:"human-gate",detail:"Notes and reason codes reviewed before send."},{n:4,title:"Archive postings and notify",kind:"deterministic",detail:"Posts taken offline; hiring team gets the close summary."}],code:`export const requisitionCloseFlow = createWorkflow({
  id: "requisition-close-flow",
  inputSchema: z.object({ jobId: z.number() }),
})
  .then(rejectRemainingCandidatesStep)
  .then(archivePostingsStep)
  .then(notifyHiringTeamStep)
  .commit();`},{id:"pr-103",name:"leave-intake-triage",category:"Workflow templates",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:["leave-eligibility-evaluator","servicenow-hr-case-bridge"],dependents:2,lastModified:"2026-07-18",usedBy:["ag-leave","ag-helpdesk"],steps:[{n:1,title:"Classify the intake",kind:"model",detail:"Leave type, urgency, and jurisdiction inferred from the employee's message."},{n:2,title:"Eligibility precheck",kind:"deterministic",detail:"leave-eligibility-evaluator runs the fast tests before a case opens."},{n:3,title:"Open the case and route",kind:"deterministic",detail:"ServiceNow HR case created and assigned by region and load."},{n:4,title:"Specialist confirms classification",kind:"human-gate",detail:"Wrong classifications return to step 1 with the correction noted."}],code:`export const leaveIntakeTriage = createWorkflow({
  id: "leave-intake-triage",
  inputSchema: z.object({ caseId: z.string() }),
})
  .then(classifyRequestStep)
  .then(eligibilityPrecheckStep)
  .then(routeToSpecialistStep)
  .commit();`},{id:"pr-104",name:"rtw-clearance-flow",category:"Workflow templates",version:"1.2.1",origin:"Northline Health, 2025-Q3",reuse:3,deps:["return-to-work-scheduler"],dependents:1,lastModified:"2026-05-23",usedBy:["ag-leave"],steps:[{n:1,title:"Collect clearance documents",kind:"deterministic",detail:"Chase list runs until the release-to-work note arrives."},{n:2,title:"Validate against the plan",kind:"deterministic",detail:"Clearance date checked against plan end and restrictions."},{n:3,title:"LOA specialist confirms clearance",kind:"human-gate",detail:"Restricted-duty notes route to the accommodation queue."},{n:4,title:"Propose return date and notify",kind:"deterministic",detail:"return-to-work-scheduler drafts the date and pings the schedule owner."}],code:`export const rtwClearanceFlow = createWorkflow({
  id: "rtw-clearance-flow",
  inputSchema: z.object({ planId: z.string() }),
})
  .then(collectClearanceStep)
  .then(proposeReturnDateStep)
  .then(notifySchedulerStep)
  .commit();`},{id:"pr-105",name:"open-enrollment-sweep",category:"Workflow templates",version:"1.4.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["carrier-834-eligibility-feed"],dependents:1,lastModified:"2026-06-26",usedBy:["ag-helpdesk"],steps:[{n:1,title:"Find incomplete elections",kind:"deterministic",detail:"Population scan against the enrollment deadline."},{n:2,title:"Draft the reminder wave",kind:"model",detail:"Message per segment: not-started vs abandoned mid-flow."},{n:3,title:"Send the wave",kind:"deterministic",detail:"Slack DM plus email, throttled per day, opt-outs honored."},{n:4,title:"Build carrier files",kind:"deterministic",detail:"carrier-834-eligibility-feed stages the 834s per companion guide."},{n:5,title:"Benefits admin releases files",kind:"human-gate",detail:"Member counts and checksums reviewed before the SFTP push."}],code:`export const openEnrollmentSweep = createWorkflow({
  id: "open-enrollment-sweep",
  inputSchema: z.object({ planYear: z.string() }),
})
  .then(findIncompleteElectionsStep)
  .then(sendReminderWaveStep)
  .then(buildCarrierFilesStep)
  .commit();`},{id:"pr-106",name:"qualifying-event-flow",category:"Workflow templates",version:"1.3.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["benefits-event-classifier","cobra-notice-scheduler"],dependents:1,lastModified:"2026-06-05",usedBy:["ag-helpdesk"],steps:[{n:1,title:"Classify the event",kind:"model",detail:"benefits-event-classifier maps the description to a qualifying-event category."},{n:2,title:"Collect evidence",kind:"deterministic",detail:"Document checklist per category; window clock starts at the event date."},{n:3,title:"Benefits admin verifies",kind:"human-gate",detail:"Evidence accepted or returned with what is missing."},{n:4,title:"Schedule notices",kind:"deterministic",detail:"cobra-notice-scheduler sets election windows where the event requires them."}],code:`export const qualifyingEventFlow = createWorkflow({
  id: "qualifying-event-flow",
  inputSchema: z.object({ eventId: z.string() }),
})
  .then(classifyEventStep)
  .then(collectEvidenceStep)
  .then(scheduleNoticesStep)
  .commit();`},{id:"pr-107",name:"contractor-conversion-flow",category:"Workflow templates",version:"1.1.1",origin:"Beacon Logistics, 2025-Q1",reuse:2,deps:["onboarding-task-sequencer"],dependents:0,lastModified:"2026-04-11",usedBy:["ag-onboarding"],steps:[{n:1,title:"Close the vendor record",kind:"deterministic",detail:"End date set, open POs flagged to procurement."},{n:2,title:"Create the hire record draft",kind:"deterministic",detail:"Identity carried over; new employee id issued, tenure preserved where policy allows."},{n:3,title:"HR approves the conversion",kind:"human-gate",detail:"Comp, classification, and start date confirmed."},{n:4,title:"Sequence onboarding",kind:"deterministic",detail:"onboarding-task-sequencer runs the standard cascade minus duplicate provisioning."}],code:`export const contractorConversionFlow = createWorkflow({
  id: "contractor-conversion-flow",
  inputSchema: z.object({ contractorId: z.string(), startDate: z.string() }),
})
  .then(closeVendorRecordStep)
  .then(createHireRecordStep)
  .then(sequenceOnboardingStep)
  .commit();`},{id:"pr-108",name:"org-change-ripple-review",category:"Workflow templates",version:"1.2.0",origin:"Meridian Group, 2026-Q1",reuse:3,deps:["staffing-event-correlator"],dependents:1,lastModified:"2026-05-31",usedBy:["ag-planning"],steps:[{n:1,title:"Correlate downstream effects",kind:"deterministic",detail:"staffing-event-correlator maps reporting, cost center, and access ripples."},{n:2,title:"Draft the impact summary",kind:"model",detail:"Affected teams, systems, and open approvals in one page."},{n:3,title:"HRBP review",kind:"human-gate",detail:"Summary approved or sent back with scope corrections."}],code:`export const orgChangeRippleReview = createWorkflow({
  id: "org-change-ripple-review",
  inputSchema: z.object({ changeId: z.string() }),
})
  .then(correlateDownstreamStep)
  .then(draftImpactSummaryStep)
  .then(hrbpReviewStep)
  .commit();`},{id:"pr-109",name:"policy-refresh-review-flow",category:"Workflow templates",version:"1.6.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:["policy-passage-retriever","handbook-conflict-detector"],dependents:2,lastModified:"2026-07-04",usedBy:["ag-helpdesk","ag-pay-compliance"],steps:[{n:1,title:"Diff against the current version",kind:"deterministic",detail:"Section-level diff of the refreshed pack text."},{n:2,title:"Find affected consumers",kind:"deterministic",detail:"Agents, workflows, and eval scenarios that cite the changed sections."},{n:3,title:"Summarize material changes",kind:"model",detail:"What changed, who is affected, which answers would differ."},{n:4,title:"Counsel review",kind:"human-gate",detail:"Material changes approved before the version promotes."},{n:5,title:"Promote the version",kind:"deterministic",detail:"Old version marked superseded; consumers repointed atomically."}],code:`export const policyRefreshReviewFlow = createWorkflow({
  id: "policy-refresh-review-flow",
  inputSchema: z.object({ packId: z.string() }),
})
  .then(diffAgainstCurrentStep)
  .then(findAffectedConsumersStep)
  .then(counselReviewStep)
  .then(promoteVersionStep)
  .commit();`},{id:"pr-110",name:"monitor-finding-triage",category:"Workflow templates",version:"1.5.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:["slack-events-bridge"],dependents:2,lastModified:"2026-07-24",usedBy:["ag-payroll-audit","ag-pay-compliance"],steps:[{n:1,title:"Enrich the finding",kind:"deterministic",detail:"Affected workers, systems, and the triggering rule attached."},{n:2,title:"Severity gate",kind:"deterministic",detail:"High severity pages the owner; medium and low queue for the daily digest."},{n:3,title:"Draft the explanation",kind:"model",detail:"Scannable summary line plus the deep-dive paragraph."},{n:4,title:"Post to the channel",kind:"deterministic",detail:"Slack message with the finding link and owner mention."},{n:5,title:"Owner acknowledges",kind:"human-gate",detail:"Finding moves to acknowledged with a next action recorded."}],code:`export const monitorFindingTriage = createWorkflow({
  id: "monitor-finding-triage",
  inputSchema: z.object({ findingId: z.string() }),
})
  .then(enrichFindingStep)
  .then(severityGateStep)
  .then(postToChannelStep)
  .commit();`},{id:"pr-111",name:"state-onboarding-packet-flow",category:"Workflow templates",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:3,deps:["onboarding-disclosure-selector","docusign-envelope-sender"],dependents:1,lastModified:"2026-07-20",usedBy:["ag-onboarding"],steps:[{n:1,title:"Select disclosures",kind:"deterministic",detail:"onboarding-disclosure-selector keys forms to state and FLSA status."},{n:2,title:"Assemble the packet",kind:"deterministic",detail:"Forms merged with hire data; deadlines stamped per form."},{n:3,title:"Coordinator spot-check",kind:"human-gate",detail:"Required for the first hire in any newly covered state."},{n:4,title:"Send for signature",kind:"deterministic",detail:"DocuSign envelope tracked; unsigned forms chase at T-2 days."}],code:`export const stateOnboardingPacketFlow = createWorkflow({
  id: "state-onboarding-packet-flow",
  inputSchema: z.object({ hireId: z.string(), state: z.string().length(2) }),
})
  .then(selectDisclosuresStep)
  .then(assemblePacketStep)
  .then(sendForSignatureStep)
  .commit();`},{id:"pr-112",name:"new-state-registration-flow",category:"Workflow templates",version:"1.0.1",origin:"Oneward Core, 2026-Q2",reuse:2,deps:["policy-pack-resolver"],dependents:1,lastModified:"2026-07-08",usedBy:["ag-pay-compliance","ag-onboarding"],steps:[{n:1,title:"Resolve state packs",kind:"deterministic",detail:"policy-pack-resolver lists what governs the new state, gaps included."},{n:2,title:"Build the registration checklist",kind:"deterministic",detail:"Tax accounts, SUI registration, posters, and notice requirements."},{n:3,title:"Draft payroll setup",kind:"deterministic",detail:"Pay group, tax profile, and calendar staged in ADP as drafts."},{n:4,title:"Compliance sign-off",kind:"human-gate",detail:"First-hire readiness confirmed before the offer goes out."}],code:`export const newStateRegistrationFlow = createWorkflow({
  id: "new-state-registration-flow",
  inputSchema: z.object({ state: z.string().length(2), firstEmployeeId: z.string() }),
})
  .then(resolveStatePacksStep)
  .then(registrationChecklistStep)
  .then(payrollSetupDraftStep)
  .then(complianceSignoffStep)
  .commit();`},{id:"pr-113",name:"i9-reverification-chase",category:"Workflow templates",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:2,deps:["i9-deadline-tracker"],dependents:0,lastModified:"2026-06-30",usedBy:["ag-onboarding"],steps:[{n:1,title:"Schedule the reverification window",kind:"deterministic",detail:"Anchored to work authorization expiry, opens at T-90 days."},{n:2,title:"Notify the employee",kind:"deterministic",detail:"Acceptable document list attached; reminders at T-60 and T-30."},{n:3,title:"HR verifies new documents",kind:"human-gate",detail:"Section 3 completed in person or via the alternative procedure."},{n:4,title:"Escalate before expiry",kind:"deterministic",detail:"Unresolved at T-14: HRBP and manager paged with the required-action date."}],code:`export const i9ReverificationChase = createWorkflow({
  id: "i9-reverification-chase",
  inputSchema: z.object({ employeeId: z.string(), workAuthExpiry: z.string() }),
})
  .then(scheduleReverifyWindowStep)
  .then(notifyEmployeeStep)
  .then(escalateBeforeExpiryStep)
  .commit();`},{id:"pr-114",name:"handbook-annual-review-flow",category:"Workflow templates",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:2,deps:["handbook-conflict-detector"],dependents:1,lastModified:"2026-07-15",usedBy:["ag-helpdesk","ag-pay-compliance"],steps:[{n:1,title:"Detect statute conflicts",kind:"deterministic",detail:"handbook-conflict-detector compares every section to current packs."},{n:2,title:"Draft redlines",kind:"model",detail:"Proposed language per conflict, statute quoted alongside."},{n:3,title:"Counsel review",kind:"human-gate",detail:"Redlines accepted, edited, or rejected section by section."},{n:4,title:"Publish the new version",kind:"deterministic",detail:"Handbook pack versioned; helpdesk answers repoint on promote."}],code:`export const handbookAnnualReviewFlow = createWorkflow({
  id: "handbook-annual-review-flow",
  inputSchema: z.object({ handbookPackId: z.string() }),
})
  .then(detectStatuteConflictsStep)
  .then(draftRedlinesStep)
  .then(counselReviewStep)
  .then(publishNewVersionStep)
  .commit();`},{id:"pr-115",name:"payroll-manager-state-scoped",category:"Permission patterns",version:"1.4.0",origin:"Harborview Systems, 2024-Q4",reuse:5,deps:[],dependents:4,lastModified:"2026-06-14",code:`{
  "role": "payroll-manager",
  "scope": { "domains": ["payroll"], "operations": ["read", "draft", "approve"] },
  "population": { "states": ["CA", "WA", "OR"], "payGroups": ["west-biweekly"] },
  "constraint": "writes require a second approver outside the requester chain"
}`},{id:"pr-116",name:"loa-specialist-region-med-docs",category:"Permission patterns",version:"1.3.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:[],dependents:3,lastModified:"2026-07-09",code:`{
  "role": "loa-specialist",
  "scope": { "domains": ["leave", "medical-docs"], "operations": ["read", "draft"] },
  "population": { "regions": ["west"], "entities": ["all"] },
  "constraint": "medical documents visible only to the assigned case owner"
}`},{id:"pr-117",name:"recruiter-req-scoped",category:"Permission patterns",version:"1.5.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:[],dependents:4,lastModified:"2026-06-27",code:`{
  "role": "recruiter",
  "scope": { "domains": ["candidates", "requisitions"], "operations": ["read", "write"] },
  "population": { "requisitions": "assigned_only" },
  "constraint": "no access to comp bands beyond the posted range"
}`},{id:"pr-118",name:"hrbp-population-scoped",category:"Permission patterns",version:"1.2.1",origin:"Meridian Group, 2026-Q1",reuse:4,deps:[],dependents:3,lastModified:"2026-05-19",code:`{
  "role": "hrbp",
  "scope": { "domains": ["worker-profile", "leave", "er-cases"], "operations": ["read", "draft"] },
  "population": { "orgs": "supported_orgs_only" },
  "constraint": "er case notes hidden outside assigned cases"
}`},{id:"pr-119",name:"comp-partner-band-scoped",category:"Permission patterns",version:"1.1.0",origin:"Meridian Group, 2026-Q1",reuse:3,deps:[],dependents:2,lastModified:"2026-04-29",code:`{
  "role": "comp-partner",
  "scope": { "domains": ["compensation"], "operations": ["read", "model", "propose"] },
  "population": { "bands": ["b1-b5"], "entities": ["all"] },
  "constraint": "executive bands excluded, proposals route to total rewards lead"
}`},{id:"pr-120",name:"benefits-admin-plan-scoped",category:"Permission patterns",version:"1.2.0",origin:"Northline Health, 2025-Q3",reuse:3,deps:[],dependents:2,lastModified:"2026-05-15",code:`{
  "role": "benefits-admin",
  "scope": { "domains": ["benefits", "enrollment"], "operations": ["read", "write"] },
  "population": { "plans": ["medical", "dental", "vision"] },
  "constraint": "retirement plan changes excluded, carrier files draft only"
}`},{id:"pr-121",name:"hr-ops-tier1-readonly",category:"Permission patterns",version:"1.6.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:[],dependents:5,lastModified:"2026-07-16",code:`{
  "role": "hr-ops-tier1",
  "scope": { "domains": ["worker-profile", "time-off"], "operations": ["read"] },
  "population": { "entities": ["all"], "pii": "masked" },
  "constraint": "no export, no bulk queries above 50 records"
}`},{id:"pr-122",name:"auditor-readonly-timeboxed",category:"Permission patterns",version:"1.3.1",origin:"Oneward Core, 2024-Q3",reuse:4,deps:[],dependents:3,lastModified:"2026-06-07",code:`{
  "role": "external-auditor",
  "scope": { "domains": ["payroll", "evidence"], "operations": ["read"] },
  "population": { "sample": "audit_selection_only" },
  "constraint": "access expires at engagement end date, all reads logged"
}`},{id:"pr-123",name:"agent-service-least-priv",category:"Permission patterns",version:"2.0.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:[],dependents:6,lastModified:"2026-07-28",code:`{
  "role": "agent-service",
  "scope": { "domains": "declared_per_agent", "operations": ["read", "draft"] },
  "population": "declared_per_agent",
  "constraint": "writes always land as drafts, approval required to commit"
}`},{id:"pr-124",name:"manager-direct-reports-only",category:"Permission patterns",version:"1.1.2",origin:"Beacon Logistics, 2025-Q1",reuse:3,deps:[],dependents:2,lastModified:"2026-03-21",code:`{
  "role": "people-manager",
  "scope": { "domains": ["time-off", "performance"], "operations": ["read", "approve"] },
  "population": { "workers": "direct_and_dotted_line_reports" },
  "constraint": "comp visible as band position, not exact peer values"
}`},{id:"pr-125",name:"exec-dashboard-aggregates-only",category:"Permission patterns",version:"1.0.1",origin:"Meridian Group, 2026-Q1",reuse:2,deps:[],dependents:1,lastModified:"2026-02-27",code:`{
  "role": "exec-viewer",
  "scope": { "domains": ["analytics"], "operations": ["read"] },
  "population": { "granularity": "aggregates_of_5_or_more" },
  "constraint": "no drill-through to individual records"
}`},{id:"pr-126",name:"it-deprovision-actor",category:"Permission patterns",version:"1.2.0",origin:"Beacon Logistics, 2025-Q1",reuse:4,deps:["msgraph-user-disable"],dependents:2,lastModified:"2026-06-01",code:`{
  "role": "it-deprovision",
  "scope": { "domains": ["identity"], "operations": ["disable", "revoke-sessions"] },
  "population": { "trigger": "termination_cascade_only" },
  "constraint": "actions require a linked term case id, evidence archived"
}`},{id:"pr-127",name:"onboarding-coordinator-prehire-scoped",category:"Permission patterns",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:2,deps:[],dependents:1,lastModified:"2026-07-11",code:`{
  "role": "onboarding-coordinator",
  "scope": { "domains": ["pre-hire", "onboarding-tasks"], "operations": ["read", "draft"] },
  "population": { "workers": "pre_start_only" },
  "constraint": "no access to comp or background check results, packet contents come from the Policy Library"
}`},{id:"pr-128",name:"screener-blind-review",category:"Permission patterns",version:"1.0.1",origin:"Crestline Foods, 2025-Q2",reuse:3,deps:[],dependents:2,lastModified:"2026-06-22",code:`{
  "role": "screening-reviewer",
  "scope": { "domains": ["candidates"], "operations": ["read", "score"] },
  "population": { "requisitions": "assigned_only" },
  "constraint": "name, photo, school, and graduation year masked during rubric scoring"
}`},{id:"pr-129",name:"policy-editor-counsel-gate",category:"Permission patterns",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:2,deps:[],dependents:2,lastModified:"2026-07-27",code:`{
  "role": "policy-editor",
  "scope": { "domains": ["policy-library"], "operations": ["read", "draft", "propose"] },
  "population": { "packs": ["company-documents"] },
  "constraint": "statute and agency packs read-only, version promotion requires counsel approval"
}`},{id:"pr-130",name:"span-tree-viewer",category:"App components",version:"2.1.0",origin:"Oneward Core, 2024-Q3",reuse:6,deps:[],dependents:5,lastModified:"2026-07-23",preview:"trace-span",props:[{name:"run",type:"RunV2",desc:"The run whose two-layer span tree renders."},{name:"onSelectSpan",type:"(spanId: string) => void",desc:"Fires when a span row is clicked; host opens the detail pane."},{name:"defaultOpen",type:'"task" | "all"',desc:"Which layer starts expanded. Defaults to task."}],code:`export function SpanTreeViewer({ run, onSelectSpan }: {
  run: RunV2;
  onSelectSpan: (spanId: string) => void;
}) {
  // two-layer trace: task spans collapsed, tool and llm children on expand
  return <TreeRoot spans={run.spans} onSelect={onSelectSpan} />;
}`},{id:"pr-131",name:"leave-timeline",category:"App components",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:[],dependents:4,lastModified:"2026-07-17",preview:"leave-timeline",props:[{name:"plan",type:"LeavePlan",desc:"Sequenced plan; segments render in order with width proportional to weeks."},{name:"compact",type:"boolean",desc:"Single-row variant for cards and chat embeds. Defaults to false."},{name:"onSelectSegment",type:"(label: string) => void",desc:"Optional; opens the governing source for the clicked segment."}],code:`export function LeaveTimeline({ plan, compact = false }: {
  plan: LeavePlan;
  compact?: boolean;
}) {
  // horizontal segments colored by protection: job-protected, pay-only, gap
  return <SegmentTrack segments={plan.segments} compact={compact} />;
}`},{id:"pr-132",name:"citation-chip",category:"App components",version:"2.3.0",origin:"Oneward Core, 2024-Q3",reuse:6,deps:["citation-formatter"],dependents:6,lastModified:"2026-07-27",preview:"citation-chip",props:[{name:"citation",type:"{ label; sourceId; effectiveDate }",desc:"Formatted citation from citation-formatter."},{name:"onOpenSource",type:"(sourceId: string) => void",desc:"Opens the policy source drawer at the cited section."}],code:`export function CitationChip({ citation, onOpenSource }: {
  citation: { label: string; sourceId: string; effectiveDate: string };
  onOpenSource: (sourceId: string) => void;
}) {
  return <button onClick={() => onOpenSource(citation.sourceId)}>{citation.label}</button>;
}`},{id:"pr-133",name:"diff-annotator",category:"App components",version:"1.6.0",origin:"Harborview Systems, 2024-Q4",reuse:5,deps:[],dependents:4,lastModified:"2026-06-25",preview:"diff-panel",props:[{name:"diff",type:"{ field; before; after }[]",desc:"Field-level rows; before renders struck, after highlighted."},{name:"annotations",type:"Record<string, string>",desc:"Optional note per field, shown under the changed value."},{name:"highlight",type:'"before" | "after"',desc:"Which column carries the accent. Defaults to after."}],code:`export function DiffAnnotator({ diff, annotations }: {
  diff: { field: string; before: string; after: string }[];
  annotations: Record<string, string>;
}) {
  return <DiffTable rows={diff} notes={annotations} highlight="after" />;
}`},{id:"pr-134",name:"approval-queue-card",category:"App components",version:"1.4.1",origin:"Meridian Group, 2026-Q1",reuse:4,deps:[],dependents:3,lastModified:"2026-06-11",preview:"approval-card",props:[{name:"approval",type:"ApprovalV2",desc:"Pending item; risk tier drives the accent and required-note rules."},{name:"onDecide",type:'(decision: "approved" | "rejected", note?: string) => void',desc:"Decision handler; reject requires a note."},{name:"dense",type:"boolean",desc:"Queue-row variant without the evidence list. Defaults to false."}],code:`export function ApprovalQueueCard({ approval, onDecide }: {
  approval: ApprovalV2;
  onDecide: (decision: "approved" | "rejected", note?: string) => void;
}) {
  return <Card tone={approval.riskTier} footer={<DecisionBar onDecide={onDecide} />} />;
}`},{id:"pr-135",name:"variance-waterfall",category:"App components",version:"1.3.0",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["variance-explainer"],dependents:2,lastModified:"2026-05-26",preview:"variance-waterfall",props:[{name:"drivers",type:"{ label; amount }[]",desc:"Signed driver amounts from variance-explainer, in narrative order."},{name:"total",type:"number",desc:"Net variance; the closing bar reconciles to this."},{name:"currency",type:"string",desc:"ISO 4217 code for axis labels. Defaults to USD."}],code:`export function VarianceWaterfall({ drivers, total }: {
  drivers: { label: string; amount: number }[];
  total: number;
}) {
  // signed bars from baseline to actual, one bar per driver
  return <Waterfall items={drivers} total={total} />;
}`},{id:"pr-136",name:"eligibility-checklist",category:"App components",version:"1.2.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["leave-eligibility-evaluator"],dependents:2,lastModified:"2026-05-07",preview:"eligibility-checklist",props:[{name:"checks",type:"{ label; met; detail }[]",desc:"One row per test; unmet rows render amber with the shortfall in detail."}],code:`export function EligibilityChecklist({ checks }: {
  checks: { label: string; met: boolean; detail: string }[];
}) {
  return <ul>{checks.map((c) => <CheckRow key={c.label} check={c} />)}</ul>;
}`},{id:"pr-137",name:"run-outcome-badge",category:"App components",version:"1.1.0",origin:"Oneward Core, 2024-Q3",reuse:3,deps:[],dependents:3,lastModified:"2026-04-21",preview:"state-ribbon",props:[{name:"outcome",type:'"completed" | "pending_approval" | "escalated" | "flagged"',desc:"Run outcome; tone maps completed green, pending amber, escalated and flagged red."}],code:`export function RunOutcomeBadge({ outcome }: {
  outcome: "completed" | "pending_approval" | "escalated" | "flagged";
}) {
  return <Badge tone={toneFor(outcome)}>{labelFor(outcome)}</Badge>;
}`},{id:"pr-138",name:"policy-source-drawer",category:"App components",version:"1.2.2",origin:"Meridian Group, 2026-Q1",reuse:3,deps:["policy-passage-retriever"],dependents:2,lastModified:"2026-06-16",preview:"citation-chip",props:[{name:"source",type:"PolicySource",desc:"Source metadata: version, effective date, refresh mechanism, status."},{name:"open",type:"boolean",desc:"Controlled visibility; the drawer opens from any citation chip."},{name:"onClose",type:"() => void",desc:"Close handler; focus returns to the triggering chip."}],code:`export function PolicySourceDrawer({ source, open, onClose }: {
  source: PolicySource;
  open: boolean;
  onClose: () => void;
}) {
  return <Drawer open={open} onClose={onClose} title={source.name} meta={source.version} />;
}`},{id:"pr-139",name:"autonomy-tier-stepper",category:"App components",version:"1.0.2",origin:"Meridian Group, 2026-Q1",reuse:2,deps:[],dependents:1,lastModified:"2026-03-12",preview:"state-ribbon",props:[{name:"current",type:"AutonomyTier",desc:"Active tier; the pill sequence highlights it and dims later tiers."},{name:"history",type:"TierChange[]",desc:"Promotion history; each change annotates its pill with date and approver."}],code:`export function AutonomyTierStepper({ current, history }: {
  current: AutonomyTier;
  history: TierChange[];
}) {
  return <Stepper steps={TIERS} active={current} annotations={history} />;
}`},{id:"pr-140",name:"policy-pack-paper",category:"App components",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:3,deps:[],dependents:2,lastModified:"2026-07-28",preview:"citation-chip",props:[{name:"pack",type:"PolicyPack",desc:"Pack whose sourceText passages render on paper, citation and effective date in the margin."}],code:`export function PolicyPackPaper({ pack }: { pack: PolicyPack }) {
  // renders sourceText passages on paper: serif measure, citation and effective date in the margin
  return (
    <article className="pack-paper">
      {pack.sourceText.map((p) => (
        <Passage key={p.citation + p.effectiveDate} passage={p} />
      ))}
    </article>
  );
}`},{id:"pr-141",name:"rules-yaml-viewer",category:"App components",version:"1.0.1",origin:"Oneward Core, 2026-Q2",reuse:3,deps:[],dependents:2,lastModified:"2026-07-30",preview:"ticker",props:[{name:"yaml",type:"string",desc:"Machine-readable rules block; renders line-numbered in the console pane."},{name:"highlightKeys",type:"string[]",desc:"Optional keys to tint, e.g. the thresholds a run just used."}],code:`export function RulesYamlViewer({ yaml, highlightKeys }: {
  yaml: string;
  highlightKeys?: string[];
}) {
  // line-numbered YAML with key highlighting; used on every Policy Library pack page
  return <CodeBlock language="yaml" source={yaml} highlight={highlightKeys} />;
}`},{id:"pr-142",name:"coverage-grid",category:"App components",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:2,deps:[],dependents:1,lastModified:"2026-07-19",preview:"coverage-matrix",props:[{name:"rows",type:'{ state; level: "complete" | "partial" | "missing"; note }[]',desc:"One cell per state; partial and missing render honestly, tinted amber and red."}],code:`export function CoverageGrid({ rows }: {
  rows: { state: string; level: "complete" | "partial" | "missing"; note: string }[];
}) {
  // partial and missing render honestly; complete-everywhere reads as fake
  return <Grid rows={rows} tone={levelTone} />;
}`}],M=[{stage:"Engagement",inFlight:6},{stage:"Build",inFlight:11},{stage:"Productize",inFlight:7},{stage:"Library",inFlight:142}],E=["All","Connectors","Agent tools","Workflow templates","Permission patterns","App components"];function O({children:e}){return(0,t.jsx)("div",{className:"mb-1.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground",children:e})}function B({kind:e}){return(0,t.jsx)("span",{className:(0,x.cn)("shrink-0 rounded border px-1.5 py-px font-mono text-[8.5px] font-bold uppercase tracking-wide","model"===e&&"border-violet/40 bg-violet-tint text-violet","human-gate"===e&&"border-amber/35 bg-amber-tint text-amber","deterministic"===e&&"border-line-strong bg-fill-3 text-muted-foreground"),children:"human-gate"===e?"human gate":e})}function L({ids:e,label:a}){return(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:a}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:e.map(e=>(0,t.jsx)(f.default,{href:`/agents/${e}`,className:"rounded border border-brand/25 bg-brand/[0.05] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand transition-colors hover:bg-brand/[0.1]",children:v.AGENTS.find(t=>t.id===e)?.short??e},e))})]})}function W({code:e}){let[n,r]=(0,a.useState)(!1);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:()=>r(e=>!e),className:"flex items-center gap-1.5 rounded border bg-card px-2 py-1 text-[10.5px] font-semibold text-muted-foreground transition-colors hover:text-foreground",children:[n?(0,t.jsx)(z.ChevronDown,{className:"size-3"}):(0,t.jsx)(j.ChevronRight,{className:"size-3"}),n?"Hide source":"Show source"]}),n&&(0,t.jsx)("pre",{className:"console-pane thin-scroll mt-2 overflow-x-auto rounded-md px-3 py-2.5 text-[10.5px] leading-relaxed",children:e})]})}function F({p:e}){return(0,t.jsxs)("div",{className:"flex flex-wrap gap-3 font-mono text-[10px] text-muted-foreground",children:[(0,t.jsxs)("span",{children:["deps: ",e.deps.length?e.deps.join(", "):"none"]}),(0,t.jsxs)("span",{children:["dependents: ",e.dependents]})]})}let G={"leave-timeline":function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"flex gap-1",children:[{label:"PDL",sub:"17.3wk",grow:17.3,cls:"border-brand/40 bg-brand/[0.12] text-brand"},{label:"FMLA",sub:"concurrent",grow:12,cls:"border-violet/40 bg-violet-tint text-violet"},{label:"CFRA",sub:"12wk",grow:12,cls:"border-success/40 bg-success-tint text-success"},{label:"Gap",sub:"1.2wk",grow:2.4,cls:"border-amber/35 bg-amber-tint text-amber"}].map(e=>(0,t.jsxs)("div",{className:(0,x.cn)("min-w-0 rounded border px-2 py-1.5",e.cls),style:{flexGrow:e.grow,flexBasis:0},children:[(0,t.jsx)("div",{className:"truncate text-[10px] font-bold",children:e.label}),(0,t.jsx)("div",{className:"truncate font-mono text-[8.5px] opacity-80",children:e.sub})]},e.label))}),(0,t.jsx)("p",{className:"mt-1.5 text-[10px] text-muted-foreground",children:"42.5 weeks total · widths proportional to entitlement · FMLA draws down concurrently with PDL"})]})},"citation-chip":function(){return(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:["California CRD PDL guidance · eff Jan 1, 2025","29 CFR 825.207 · eff Apr 7, 2023","Meridian SPD 2026 · eff Jan 1, 2026"].map(e=>(0,t.jsx)("span",{className:"rounded border border-brand/25 bg-brand/[0.05] px-1.5 py-0.5 font-mono text-[9.5px] text-brand",children:e},e))})},"approval-card":function(){return(0,t.jsxs)("div",{className:"max-w-md rounded-md border bg-card",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b px-3 py-2",children:[(0,t.jsx)("span",{className:"text-[11.5px] font-bold",children:"Stage CA leave plan · Priya Raman"}),(0,t.jsx)("span",{className:"rounded border border-amber/35 bg-amber-tint px-1.5 py-px font-mono text-[8.5px] font-bold uppercase text-amber",children:"Medium"})]}),(0,t.jsx)("div",{className:"px-3 py-2 text-[10.5px] text-muted-foreground",children:"Writes 4 segments to SuccessFactors EC Time Off · evidence: run rn-1180, 3 citations"}),(0,t.jsxs)("div",{className:"flex items-center gap-1.5 border-t px-3 py-2",children:[(0,t.jsx)("button",{type:"button",className:"rounded border border-success/40 bg-success-tint px-2 py-0.5 text-[10.5px] font-semibold text-success",children:"Approve"}),(0,t.jsx)("button",{type:"button",className:"rounded border border-line-strong px-2 py-0.5 text-[10.5px] font-semibold text-muted-foreground",children:"Reject"}),(0,t.jsx)("span",{className:"ml-auto font-mono text-[9px] text-muted-foreground",children:"requires note on reject"})]})]})},"variance-waterfall":function(){return(0,t.jsx)("div",{className:"flex items-end gap-3",children:[{label:"Prior",amount:"$8.42M",h:64,cls:"border-line-strong bg-fill-4"},{label:"Staffing",amount:"+$96k",h:22,cls:"border-brand/40 bg-brand/[0.25]"},{label:"Rate",amount:"+$41k",h:13,cls:"border-brand/40 bg-brand/[0.25]"},{label:"Hours",amount:"-$18k",h:8,cls:"border-amber/35 bg-amber/[0.3]"},{label:"One-time",amount:"+$67k",h:17,cls:"border-brand/40 bg-brand/[0.25]"},{label:"Staged",amount:"$8.61M",h:78,cls:"border-line-strong bg-fill-4"}].map(e=>(0,t.jsxs)("div",{className:"flex flex-col items-center gap-1",children:[(0,t.jsx)("span",{className:"font-mono text-[8.5px] tabular-nums text-muted-foreground",children:e.amount}),(0,t.jsx)("div",{className:(0,x.cn)("w-9 rounded-sm border",e.cls),style:{height:`${e.h}px`}}),(0,t.jsx)("span",{className:"text-[9px] text-muted-foreground",children:e.label})]},e.label))})},"eligibility-checklist":function(){return(0,t.jsx)("div",{className:"max-w-md space-y-1",children:[{label:"12 months tenure",detail:"met · 4.2 years",ok:!0},{label:"1,250 hours in the 12-month lookback",detail:"met · 1,847 hours",ok:!0},{label:"50+ employees within 75 miles",detail:"met · Fresno campus",ok:!0},{label:"CFRA and PDL overlap",detail:"needs specialist review",ok:!1}].map(e=>(0,t.jsxs)("div",{className:"flex items-center gap-2 rounded border bg-card px-2.5 py-1.5",children:[e.ok?(0,t.jsx)(r.CheckCircle2,{className:"size-3.5 shrink-0 text-success"}):(0,t.jsx)(N.default,{className:"size-3.5 shrink-0 text-amber"}),(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-[11px] font-medium",children:e.label}),(0,t.jsx)("span",{className:(0,x.cn)("shrink-0 font-mono text-[9px]",e.ok?"text-muted-foreground":"text-amber"),children:e.detail})]},e.label))})},"state-ribbon":function(){let e=["Draft","Awaiting approval","Approved","Written"];return(0,t.jsx)("div",{className:"flex items-center gap-1.5",children:e.map((a,n)=>(0,t.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:(0,x.cn)("rounded-full border px-2 py-0.5 text-[10px] font-semibold",2===n&&"border-brand/40 bg-brand-tint text-brand",n<2&&"border-line bg-fill-2 text-muted-foreground",n>2&&"border-line bg-fill-1 text-muted-foreground/50"),children:a}),n<e.length-1&&(0,t.jsx)(j.ChevronRight,{className:"size-3 text-muted-foreground/40"})]},a))})},"diff-panel":function(){return(0,t.jsxs)("div",{className:"grid max-w-lg grid-cols-2 gap-2",children:[(0,t.jsxs)("div",{className:"overflow-hidden rounded-md border bg-card",children:[(0,t.jsx)("div",{className:"border-b bg-fill-2 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-wider text-muted-foreground",children:"Original"}),(0,t.jsxs)("div",{className:"space-y-px p-1.5 font-mono text-[9.5px] leading-relaxed",children:[(0,t.jsx)("div",{className:"px-1.5 text-foreground/75",children:"Title: Care Coordinator II"}),(0,t.jsx)("div",{className:"rounded bg-destructive-tint px-1.5 text-destructive",children:"Salary: competitive, DOE"}),(0,t.jsx)("div",{className:"px-1.5 text-foreground/75",children:"Location: Fresno, CA + remote"})]})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-md border bg-card",children:[(0,t.jsx)("div",{className:"border-b bg-fill-2 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-wider text-muted-foreground",children:"Compliant"}),(0,t.jsxs)("div",{className:"space-y-px p-1.5 font-mono text-[9.5px] leading-relaxed",children:[(0,t.jsx)("div",{className:"px-1.5 text-foreground/75",children:"Title: Care Coordinator II"}),(0,t.jsx)("div",{className:"rounded bg-success-tint px-1.5 text-success",children:"Salary: $58,300 to $71,400 / yr"}),(0,t.jsx)("div",{className:"px-1.5 text-foreground/75",children:"Location: Fresno, CA + remote"})]})]})]})},"chat-thread":function(){return(0,t.jsxs)("div",{className:"max-w-md space-y-1.5",children:[(0,t.jsx)("div",{className:"ml-10 rounded-md rounded-tr-sm border border-brand/25 bg-brand-tint px-2.5 py-1.5 text-[11px]",children:"How many PDL weeks does Priya have left?"}),(0,t.jsxs)("div",{className:"mr-10 rounded-md rounded-tl-sm border bg-fill-2 px-2.5 py-1.5 text-[11px]",children:["9.4 of 17.3 weeks remain; PDL runs through Oct 2, 2026.",(0,t.jsx)("span",{className:"ml-1.5 inline-block rounded border border-brand/25 bg-brand/[0.05] px-1 py-px align-middle font-mono text-[8.5px] text-brand",children:"California CRD PDL guidance · eff Jan 1, 2025"})]})]})},"kpi-card":function(){return(0,t.jsxs)("div",{className:"w-52 rounded-md border bg-card px-3 py-2.5",children:[(0,t.jsx)("div",{className:"text-[9px] font-bold uppercase tracking-wider text-muted-foreground",children:"Pre-run flags"}),(0,t.jsx)("div",{className:"mt-0.5 text-[22px] font-bold tabular-nums",children:"6"}),(0,t.jsxs)("div",{className:"text-[10px] text-muted-foreground",children:["0.4% of gross · ",(0,t.jsx)("span",{className:"font-semibold text-success",children:"3 fewer than prior period"})]})]})},"coverage-matrix":function(){return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"grid w-56 grid-cols-4 gap-1",children:[{state:"CA",level:"complete"},{state:"NY",level:"complete"},{state:"TX",level:"complete"},{state:"WA",level:"complete"},{state:"CO",level:"complete"},{state:"IL",level:"complete"},{state:"NJ",level:"complete"},{state:"MA",level:"complete"},{state:"FL",level:"complete"},{state:"GA",level:"complete"},{state:"OR",level:"partial"},{state:"MN",level:"partial"},{state:"AZ",level:"partial"},{state:"PA",level:"missing"},{state:"OH",level:"missing"},{state:"MI",level:"missing"}].map(e=>(0,t.jsx)("div",{className:(0,x.cn)("rounded border px-1.5 py-1 text-center font-mono text-[9.5px] font-bold","complete"===e.level&&"border-success/40 bg-success-tint text-success","partial"===e.level&&"border-amber/35 bg-amber-tint text-amber","missing"===e.level&&"border-line bg-fill-2 text-muted-foreground/60"),children:e.state},e.state))}),(0,t.jsx)("p",{className:"mt-1.5 text-[10px] text-muted-foreground",children:"10 complete · 3 partial · 3 not yet covered"})]})},ticker:function(){return(0,t.jsx)("div",{className:"max-w-lg divide-y divide-line overflow-hidden rounded-md border bg-card",children:[{t:"14:02:11",text:"pay-data-input.modify staged 412 entries (US-BW-03)"},{t:"14:02:14",text:"payroll-variance-detector: 6 flags above 2.0% tolerance"},{t:"14:02:19",text:"approval requested: release batch pb-004512"}].map(e=>(0,t.jsxs)("div",{className:"flex items-baseline gap-2.5 px-2.5 py-1.5 font-mono text-[10px]",children:[(0,t.jsx)("span",{className:"shrink-0 tabular-nums text-muted-foreground",children:e.t}),(0,t.jsx)("span",{className:"truncate text-foreground/85",children:e.text})]},e.t))})},"trace-span":function(){return(0,t.jsx)("div",{className:"max-w-md space-y-1",children:[{rail:"border-line-strong",bg:"bg-fill-2",kind:"task",title:"Evaluate eligibility",meta:"1.2s"},{rail:"border-violet",bg:"bg-violet-tint",kind:"llm",title:"Draft plan narrative",meta:"3.4s · 2,141 tok"},{rail:"border-line-strong",bg:"bg-fill-2",kind:"tool",title:"state-leave-sequencer",meta:"240ms"}].map(e=>(0,t.jsxs)("div",{className:(0,x.cn)("flex items-center gap-2 rounded-r-md border-l-2 px-2.5 py-1.5",e.rail,e.bg),children:[(0,t.jsx)("span",{className:(0,x.cn)("w-8 shrink-0 font-mono text-[8.5px] font-bold uppercase","llm"===e.kind?"text-violet":"text-muted-foreground"),children:e.kind}),(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-[11px] font-medium",children:e.title}),(0,t.jsx)("span",{className:"shrink-0 font-mono text-[9px] tabular-nums text-muted-foreground",children:e.meta})]},e.title))})},"mastery-toggle":function(){return(0,t.jsxs)("div",{className:"inline-flex items-center rounded-full border bg-fill-2 p-0.5",children:[(0,t.jsx)("span",{className:"rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold text-muted-foreground",children:"Current: SF masters"}),(0,t.jsx)("span",{className:"rounded-full border border-brand/40 bg-brand-tint px-2.5 py-0.5 text-[10.5px] font-semibold text-brand",children:"Projected: Oneward masters"})]})}};function q({p:e}){let a=(e.schema??[]).filter(e=>"in"===e.dir),n=(e.schema??[]).filter(e=>"out"===e.dir);return(0,t.jsxs)("div",{className:"space-y-3.5",children:[e.mechanism&&(0,t.jsx)("p",{className:"max-w-3xl text-[12px] leading-relaxed text-foreground/90",children:e.mechanism}),(0,t.jsxs)("div",{className:"grid grid-cols-5 gap-4",children:[e.schema&&(0,t.jsxs)("div",{className:"col-span-3",children:[(0,t.jsx)(O,{children:"Schema"}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-md border bg-card",children:[(0,t.jsxs)("div",{className:"grid grid-cols-[40px_1.1fr_0.7fr_1.7fr] gap-2 border-b bg-fill-2 px-2.5 py-1.5 text-[8.5px] font-bold uppercase tracking-wider text-muted-foreground",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{children:"Field"}),(0,t.jsx)("span",{children:"Type"}),(0,t.jsx)("span",{children:"Constraints"})]}),(0,t.jsx)("div",{className:"divide-y divide-line",children:[...a,...n].map(e=>(0,t.jsxs)("div",{className:"grid grid-cols-[40px_1.1fr_0.7fr_1.7fr] items-baseline gap-2 px-2.5 py-1.5",children:[(0,t.jsx)("span",{className:(0,x.cn)("justify-self-start rounded border px-1 font-mono text-[8px] font-bold uppercase","in"===e.dir?"border-brand/30 bg-brand/[0.06] text-brand":"border-line-strong bg-fill-3 text-muted-foreground"),children:e.dir}),(0,t.jsx)("span",{className:"truncate font-mono text-[10.5px] font-semibold",children:e.field}),(0,t.jsx)("span",{className:"truncate font-mono text-[10px] text-muted-foreground",children:e.type}),(0,t.jsx)("span",{className:"font-mono text-[10px] leading-snug text-foreground/80",children:e.constraints})]},e.field))})]})]}),(0,t.jsxs)("div",{className:"col-span-2 space-y-3.5 self-start",children:[e.scopes&&(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:"Connector scopes"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:e.scopes.map(e=>(0,t.jsxs)("span",{className:"rounded border bg-card px-1.5 py-0.5 font-mono text-[9.5px] text-foreground/85",children:[(0,t.jsx)("span",{className:"font-bold text-brand",children:e.connector})," · ",e.scope]},e.connector+e.scope))})]}),e.failure&&(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:"Failure behavior"}),(0,t.jsx)("ul",{className:"space-y-1",children:e.failure.map(e=>(0,t.jsxs)("li",{className:"flex gap-1.5 text-[11px] leading-snug text-foreground/85",children:[(0,t.jsx)("span",{className:"mt-[7px] size-1 shrink-0 rounded-full bg-amber-solid"}),e]},e))})]}),e.tests&&(0,t.jsxs)("div",{className:"flex items-center gap-1.5 text-[11px] text-muted-foreground",children:[(0,t.jsx)(r.CheckCircle2,{className:"size-3.5 shrink-0 text-success"}),e.tests]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-5 gap-4",children:[e.changelog&&(0,t.jsxs)("div",{className:"col-span-3",children:[(0,t.jsx)(O,{children:"Changelog"}),(0,t.jsx)("div",{className:"space-y-1",children:[...e.changelog].reverse().map(e=>(0,t.jsxs)("div",{className:"flex items-baseline gap-2.5 text-[11px]",children:[(0,t.jsxs)("span",{className:"w-10 shrink-0 font-mono text-[10px] font-bold text-brand",children:["v",e.version]}),(0,t.jsx)("span",{className:"w-[74px] shrink-0 font-mono text-[9.5px] text-muted-foreground",children:e.date}),(0,t.jsx)("span",{className:"leading-snug text-foreground/85",children:e.note})]},e.version))})]}),(0,t.jsxs)("div",{className:"col-span-2 space-y-3 self-start",children:[e.usedBy&&(0,t.jsx)(L,{ids:e.usedBy,label:"Used by"}),(0,t.jsx)(F,{p:e})]})]}),(0,t.jsx)(W,{code:e.code})]})}function H({p:e}){return(0,t.jsxs)("div",{className:"space-y-3.5",children:[e.steps&&(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:"Step sequence"}),(0,t.jsx)("div",{className:"max-w-3xl space-y-1",children:e.steps.map(e=>(0,t.jsxs)("div",{className:"flex items-start gap-2.5 rounded border bg-card px-2.5 py-2",children:[(0,t.jsx)("span",{className:"mt-px grid size-4.5 shrink-0 place-items-center rounded-full border bg-fill-2 font-mono text-[9px] font-bold text-muted-foreground",children:e.n}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"truncate text-[11.5px] font-bold",children:e.title}),(0,t.jsx)(B,{kind:e.kind})]}),e.detail&&(0,t.jsx)("p",{className:"mt-0.5 text-[10.5px] leading-snug text-muted-foreground",children:e.detail})]})]},e.n))})]}),(0,t.jsxs)("div",{className:"flex flex-wrap items-start gap-6",children:[e.usedBy&&(0,t.jsx)(L,{ids:e.usedBy,label:"Instantiated by"}),(0,t.jsx)(F,{p:e})]}),(0,t.jsx)(W,{code:e.code})]})}function Q({p:e}){let a=e.preview?G[e.preview]:null;return(0,t.jsxs)("div",{className:"space-y-3.5",children:[a&&(0,t.jsxs)("div",{children:[(0,t.jsx)(O,{children:"Live preview · seeded sample data"}),(0,t.jsx)("div",{className:"rounded-md border bg-background/60 p-3.5",children:a()})]}),e.props&&(0,t.jsxs)("div",{className:"max-w-3xl",children:[(0,t.jsx)(O,{children:"Props"}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-md border bg-card",children:[(0,t.jsxs)("div",{className:"grid grid-cols-[0.8fr_1.2fr_1.8fr] gap-2 border-b bg-fill-2 px-2.5 py-1.5 text-[8.5px] font-bold uppercase tracking-wider text-muted-foreground",children:[(0,t.jsx)("span",{children:"Name"}),(0,t.jsx)("span",{children:"Type"}),(0,t.jsx)("span",{children:"Description"})]}),(0,t.jsx)("div",{className:"divide-y divide-line",children:e.props.map(e=>(0,t.jsxs)("div",{className:"grid grid-cols-[0.8fr_1.2fr_1.8fr] items-baseline gap-2 px-2.5 py-1.5",children:[(0,t.jsx)("span",{className:"truncate font-mono text-[10.5px] font-semibold",children:e.name}),(0,t.jsx)("span",{className:"font-mono text-[10px] leading-snug text-muted-foreground",children:e.type}),(0,t.jsx)("span",{className:"text-[10.5px] leading-snug text-foreground/80",children:e.desc})]},e.name))})]})]}),(0,t.jsx)(F,{p:e}),(0,t.jsx)(W,{code:e.code})]})}function U({p:e}){return(0,t.jsxs)("div",{className:"space-y-2.5",children:[(0,t.jsx)(F,{p:e}),(0,t.jsx)("pre",{className:"console-pane thin-scroll overflow-x-auto rounded-md px-3 py-2.5 text-[10.5px] leading-relaxed",children:e.code})]})}function J(){let[e,n]=(0,a.useState)("All"),[r,o]=(0,a.useState)(null),i=(0,a.useMemo)(()=>"All"===e?T:T.filter(t=>t.category===e),[e]);return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-4 gap-3",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-1.5",children:"Primitives"}),(0,t.jsx)("span",{className:"text-[24px] font-bold tabular-nums",children:142}),(0,t.jsxs)("span",{className:"ml-2 text-[11px] text-muted-foreground",children:[62,"% reused in 2+ deployments"]})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-1.5",children:"Time to deploy a new agent"}),(0,t.jsxs)("span",{className:"text-[24px] font-bold tabular-nums",children:[9,"d"]}),(0,t.jsxs)("span",{className:"ml-2 text-[11px] text-muted-foreground",children:["from library vs ",34,"d from scratch"]}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)(c.SourceChip,{chip:{kind:"internal",source:"Meridian internal baseline",method:"Meridian internal baseline, engagement telemetry, trailing 4 quarters. Policy packs promoted to the Policy Library; the 142 counted here are code and configuration primitives only."}})})]}),(0,t.jsxs)("div",{className:"col-span-2 rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(c.Eyebrow,{className:"mb-2",children:"Flywheel"}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:M.map((e,a)=>(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("span",{className:"rounded border bg-fill-2 px-2.5 py-1.5 text-[11px]",children:[(0,t.jsx)("span",{className:"font-semibold",children:e.stage}),(0,t.jsx)("span",{className:"ml-1.5 font-mono text-[10px] text-brand",children:e.inFlight})]}),a<M.length-1&&(0,t.jsx)(j.ChevronRight,{className:"size-3 text-muted-foreground/50"})]},e.stage))})]})]}),(0,t.jsx)("div",{className:"mt-3 flex items-center gap-1.5",children:E.map(a=>(0,t.jsxs)("button",{onClick:()=>n(a),className:(0,x.cn)("rounded border px-2 py-1 text-[11px] font-semibold transition-colors",e===a?"border-brand/40 bg-brand/[0.07] text-brand":"bg-card text-muted-foreground hover:text-foreground"),children:[a,(0,t.jsx)("span",{className:"ml-1 font-mono text-[9px] opacity-60",children:"All"===a?T.length:T.filter(e=>e.category===a).length})]},a))}),(0,t.jsx)("div",{className:"mt-3 overflow-hidden rounded-lg border bg-card",children:(0,t.jsx)("div",{className:"thin-scroll max-h-[560px] divide-y divide-line overflow-y-auto",children:i.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:()=>o(r===e.id?null:e.id),className:"flex h-9 w-full items-center gap-3 px-4 text-left transition-colors hover:bg-fill-2",children:[r===e.id?(0,t.jsx)(z.ChevronDown,{className:"size-3 shrink-0 text-muted-foreground"}):(0,t.jsx)(j.ChevronRight,{className:"size-3 shrink-0 text-muted-foreground/50"}),(0,t.jsx)("span",{className:"w-64 shrink-0 truncate font-mono text-[11.5px] font-semibold",children:e.name}),(0,t.jsx)("span",{className:"w-36 shrink-0 text-[10.5px] text-muted-foreground",children:e.category}),(0,t.jsxs)("span",{className:"w-14 shrink-0 font-mono text-[10px] text-muted-foreground",children:["v",e.version]}),(0,t.jsxs)("span",{className:"min-w-0 flex-1 truncate text-[10.5px] text-muted-foreground",children:["Origin: ",e.origin]}),(0,t.jsxs)("span",{className:"w-20 shrink-0 text-right font-mono text-[10px]",children:["reuse ",e.reuse]}),(0,t.jsx)("span",{className:"w-24 shrink-0 text-right font-mono text-[10px] text-muted-foreground",children:e.lastModified})]}),r===e.id&&(0,t.jsx)("div",{className:"border-t border-line bg-fill-1 px-4 py-3.5 pl-[46px]",children:"Agent tools"===e.category&&e.schema?(0,t.jsx)(q,{p:e}):"Workflow templates"===e.category&&e.steps?(0,t.jsx)(H,{p:e}):"App components"===e.category&&e.props?(0,t.jsx)(Q,{p:e}):(0,t.jsx)(U,{p:e})})]},e.id))})})]})}function $(){let{draftAgentCreated:e,setDraftAgentCreated:n}=(0,m.useAppState)(),[o,p]=(0,a.useState)(""),[f,h]=(0,a.useState)(e),y=g.voeDraft.streamedAssembly.length+g.voeDraft.sections.length,{visible:b,done:v,start:x}=(0,u.useStreamedReveal)(y,{auto:!1,min:420,max:860}),[k,w]=(0,a.useState)(!1),_=()=>{o.trim()&&(h(!0),x())},z=e?g.voeDraft.streamedAssembly.length:Math.min(b,g.voeDraft.streamedAssembly.length),j=e?g.voeDraft.sections.length:Math.max(0,b-g.voeDraft.streamedAssembly.length);return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"gridlines surface-2 rounded-lg border p-5",children:[(0,t.jsx)(c.Eyebrow,{brand:!0,className:"mb-2.5",children:"Describe the agent in plain language"}),(0,t.jsxs)("div",{className:"flex items-start gap-2.5",children:[(0,t.jsx)("textarea",{value:o,onChange:e=>p(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),_())},rows:2,placeholder:`Try: "${g.voeDraft.prompt}"`,className:"min-h-[58px] flex-1 resize-none rounded-md border border-line-strong bg-fill-3 px-3.5 py-2.5 text-[13px] leading-relaxed outline-none placeholder:text-muted-foreground/60 focus:border-brand/50"}),(0,t.jsxs)(l.Button,{onClick:_,disabled:!o.trim(),className:"h-[58px]",children:[(0,t.jsx)(s,{className:"size-4"})," Draft the agent"]})]})]}),f&&(0,t.jsxs)("div",{className:"mt-4 grid grid-cols-5 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-2 self-start rounded-lg border bg-card",children:[(0,t.jsx)("div",{className:"border-b px-4 py-2.5",children:(0,t.jsx)(c.Eyebrow,{children:"Assembling from the library"})}),(0,t.jsxs)("div",{className:"divide-y divide-line",children:[g.voeDraft.streamedAssembly.slice(0,z).map(e=>(0,t.jsxs)("div",{className:"animate-step-in flex items-start gap-2.5 px-4 py-2.5",children:[(0,t.jsx)(r.CheckCircle2,{className:"mt-0.5 size-3.5 shrink-0 text-success"}),(0,t.jsxs)("span",{className:"min-w-0 text-[12.5px] leading-snug",children:[e.primitive?(0,t.jsxs)(t.Fragment,{children:[e.text.split(e.primitive)[0],(0,t.jsx)("button",{className:"font-mono font-semibold text-brand hover:underline",onClick:()=>document.querySelector("[data-tab-primitives]")?.dispatchEvent(new Event("click")),children:e.primitive}),e.text.split(e.primitive)[1]??""]}):e.text,e.baseline&&(0,t.jsx)("span",{className:"ml-1.5 inline-flex",children:(0,t.jsx)(c.SourceChip,{chip:{kind:"internal",source:"Meridian internal baseline",method:"Engagement telemetry, trailing 4 quarters"}})})]})]},e.text)),z<g.voeDraft.streamedAssembly.length&&(0,t.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2.5 text-[11.5px] text-muted-foreground",children:[(0,t.jsx)("span",{className:"size-1.5 animate-ping rounded-full bg-brand"})," assembling"]})]})]}),(0,t.jsxs)("div",{className:"col-span-3 self-start rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b px-4 py-2.5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(c.Eyebrow,{children:["Draft · ",g.voeDraft.name]}),(0,t.jsx)(c.TierBadge,{tier:"Draft"})]}),(0,t.jsxs)("span",{className:"font-mono text-[10px] text-muted-foreground",children:["owner: ",g.voeDraft.owner]})]}),(0,t.jsx)("div",{className:"divide-y divide-line",children:g.voeDraft.sections.slice(0,j).map(e=>(0,t.jsxs)("div",{className:"animate-step-in px-4 py-3",children:[(0,t.jsx)("div",{className:"text-[12.5px] font-bold",children:e.title}),(0,t.jsx)("p",{className:"mt-0.5 text-[12px] leading-relaxed text-muted-foreground",children:e.body})]},e.title))}),(v||e)&&!k&&(0,t.jsxs)("div",{className:"flex items-center justify-between border-t px-4 py-3",children:[(0,t.jsx)("span",{className:"text-[12px] text-muted-foreground",children:"Every write stays behind Approvals; the starter suite gates any tier change."}),(0,t.jsxs)(l.Button,{size:"sm",onClick:()=>{w(!0),n(!0),d.toast.success("Employment Verification Agent deployed as v1",{description:"Draft tier · 12-scenario starter suite attached · visible in Agents pending its first regression run."})},children:[(0,t.jsx)(i,{className:"size-3.5"})," Deploy as v1"]})]}),k&&(0,t.jsxs)("div",{className:"flex items-center gap-2 border-t px-4 py-3 text-[12.5px] font-semibold text-success",children:[(0,t.jsx)(r.CheckCircle2,{className:"size-4"})," Deployed as v1 at Draft tier. Under two minutes from sentence to governed agent."]})]})]})]})}let Y=["agents","primitives","objects","policy-library"],K=e=>{let t=e?.toLowerCase();return"policy-sources"===t?"policy-library":t&&Y.includes(t)?t:null};function V(){let e=(0,n.useSearchParams)(),r=(0,n.useRouter)(),o=(0,n.usePathname)(),[i,s]=(0,a.useState)(K(e.get("tab"))??"agents"),d=e.get("pack")??e.get("source"),l=K(e.get("tab")),[u,m]=(0,a.useState)(l);return l!==u&&(m(l),l&&l!==i&&s(l)),(0,t.jsxs)("div",{children:[(0,t.jsx)(c.PageHeader,{title:"Build"}),(0,t.jsxs)(p.Tabs,{value:i,onValueChange:e=>{s(e),m(e),r.replace("agents"===e?o:`${o}?tab=${e}`,{scroll:!1})},children:[(0,t.jsxs)(p.TabsList,{children:[(0,t.jsx)(p.TabsTrigger,{value:"agents",children:"Agents"}),(0,t.jsx)(p.TabsTrigger,{value:"primitives",children:"Primitives"}),(0,t.jsx)(p.TabsTrigger,{value:"objects",children:"Objects"}),(0,t.jsx)(p.TabsTrigger,{value:"policy-library",children:"Policy Library"})]}),(0,t.jsx)(p.TabsContent,{value:"agents",children:(0,t.jsx)($,{})}),(0,t.jsx)(p.TabsContent,{value:"primitives",children:(0,t.jsx)(J,{})}),(0,t.jsx)(p.TabsContent,{value:"objects",children:(0,t.jsx)(R,{})}),(0,t.jsx)(p.TabsContent,{value:"policy-library",children:(0,t.jsx)(_,{highlight:d})})]})]})}e.s(["default",0,function(){return(0,t.jsx)(a.Suspense,{children:(0,t.jsx)(V,{})})}],17344)}]);