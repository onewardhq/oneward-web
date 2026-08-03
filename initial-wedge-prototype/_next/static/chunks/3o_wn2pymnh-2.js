(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17344,e=>{"use strict";var t=e.i(82699),r=e.i(89625),o=e.i(18229),n=e.i(66009),a=e.i(52696),s=e.i(28668),i=e.i(98451);let c=(0,i.default)("rocket",[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]),d=(0,i.default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);var l=e.i(10384),p=e.i(63332),m=e.i(91874),u=e.i(53558),g=e.i(85238),h=e.i(62813),f=e.i(68318),x=e.i(92940),y=e.i(12895),b=e.i(47926),v=e.i(29338),z=e.i(16592),k=e.i(39563);let w=e=>z.AGENTS.find(t=>t.id===e)?.short??e.replace("ag-","");function j({pack:e,onBack:r}){return(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:r,className:"mb-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-muted-foreground hover:text-foreground",children:[(0,t.jsx)(y.ArrowLeft,{className:"size-3.5"})," All packs"]}),(0,t.jsxs)("div",{className:"mb-3 flex items-start justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(p.Eyebrow,{children:[e.category," · ",e.jurisdiction]}),(0,t.jsx)("span",{className:(0,k.cn)("rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold","current"===e.status&&"border-success/30 text-success","superseded"===e.status&&"border-white/15 text-muted-foreground line-through","pending"===e.status&&"border-amber/30 text-amber"),children:e.status}),e.supersededBy&&(0,t.jsxs)("button",{onClick:()=>history.replaceState(null,"",`?tab=policy-library&pack=${e.supersededBy}`),className:"font-mono text-[10px] text-brand hover:underline",children:["replaced by ",e.supersededBy]})]}),(0,t.jsx)("h2",{className:"mt-1 text-[17px] font-bold tracking-tight",children:e.name})]}),(0,t.jsxs)("div",{className:"shrink-0 text-right font-mono text-[10.5px] leading-relaxed text-muted-foreground",children:[(0,t.jsxs)("div",{children:["last scanned ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.lastScanned})]}),(0,t.jsxs)("div",{children:["last content update ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.lastContentUpdate})]}),(0,t.jsxs)("div",{children:["next review ",(0,t.jsx)("span",{className:"text-foreground/85",children:e.nextReview})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-5 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-3 space-y-4",children:[(0,t.jsxs)("div",{className:"paper rounded-lg border border-black/10 p-5",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2.5",children:"Source text · operative passages"}),(0,t.jsxs)("div",{className:"thin-scroll max-h-[380px] space-y-3 overflow-y-auto pr-2",children:[e.sourceText.map((e,r)=>(0,t.jsxs)("div",{className:"rounded-md border border-black/10 bg-white px-4 py-3",children:[(0,t.jsx)("p",{className:"text-[12.5px] leading-relaxed",children:e.text}),(0,t.jsxs)("div",{className:"mt-2 flex flex-wrap items-center gap-2",children:[(0,t.jsx)("span",{className:"inline-flex items-center rounded border border-[#0d6da1]/40 bg-[#00c2ff]/[0.08] px-1.5 py-px font-mono text-[10px] font-semibold text-[#075e8c]",children:e.citation}),(0,t.jsxs)("span",{className:"font-mono text-[9.5px] text-[#3d4f6b]",children:["effective ",e.effectiveDate]})]})]},r)),0===e.sourceText.length&&(0,t.jsx)("p",{className:"text-[12px] text-[#3d4f6b]",children:"Structured rules only; source passages ingest during the engagement."})]})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2",children:"Structured rules"}),(0,t.jsx)("pre",{className:"console-pane thin-scroll overflow-x-auto rounded-md px-3.5 py-3 text-[11px] leading-relaxed",children:e.rulesYaml})]})]}),(0,t.jsxs)("div",{className:"col-span-2 space-y-4 self-start",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2",children:"Sources monitored"}),(0,t.jsx)("div",{className:"space-y-1.5",children:e.sources.map(e=>(0,t.jsxs)("div",{className:"text-[11.5px]",children:[(0,t.jsx)("div",{className:"font-medium",children:e.label}),(0,t.jsxs)("div",{className:"font-mono text-[10px] text-dim",children:[e.url," · retrieved ",e.retrieved]})]},e.id))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2",children:"Version history"}),(0,t.jsx)("div",{className:"space-y-1",children:e.versionHistory.map(e=>(0,t.jsxs)("div",{className:"flex items-baseline gap-2 text-[11.5px]",children:[(0,t.jsx)("span",{className:"w-10 shrink-0 font-mono font-bold",children:e.version}),(0,t.jsx)("span",{className:"w-20 shrink-0 font-mono text-[10px] text-dim",children:e.date}),(0,t.jsx)("span",{className:"min-w-0 flex-1 text-muted-foreground",children:e.note})]},e.version))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2",children:"Dependents"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.dependents.agents.map(e=>(0,t.jsx)(x.default,{href:`/agents/${e}`,className:"rounded border border-brand/30 bg-brand/[0.06] px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand hover:bg-brand/[0.12]",children:w(e)},e))}),e.dependents.evalHint&&(0,t.jsx)("p",{className:"mt-2 text-[11px] text-muted-foreground",children:e.dependents.evalHint})]})]})]})]})}function S({highlight:e}){let[o,n]=(0,r.useState)(e??null),[a,s]=(0,r.useState)("All categories"),[i,c]=(0,r.useState)("All jurisdictions"),[d,l]=(0,r.useState)("All statuses"),[m,u]=(0,r.useState)("All agents"),g=(0,r.useRef)(null),[h,f]=(0,r.useState)(e);e!==h&&(f(e),e&&n(e));let x=(0,r.useMemo)(()=>["All jurisdictions","Federal",...Array.from(new Set(v.policyPacks.filter(e=>"Federal"!==e.jurisdiction).map(e=>e.jurisdiction))).sort()],[]),y=(0,r.useMemo)(()=>v.policyPacks.filter(e=>("All categories"===a||e.category===a)&&("All jurisdictions"===i||e.jurisdiction===i)&&("All statuses"===d||e.status===d)&&("All agents"===m||e.dependents.agents.includes(m))),[a,i,d,m]);(0,r.useEffect)(()=>{o&&g.current?.scrollTo({top:0})},[o]);let C=o?(0,v.packById)(o):null;return C?(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)(j,{pack:C,onBack:()=>n(null)})}):(0,t.jsxs)("div",{className:"mt-4 space-y-4",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-baseline justify-between",children:[(0,t.jsx)(p.Eyebrow,{children:"State coverage · ten Meridian states"}),(0,t.jsx)("span",{className:"text-[10.5px] text-dim",children:"partial and missing states exist by design"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:b.coverage.map(e=>(0,t.jsxs)("span",{title:e.note,className:(0,k.cn)("rounded border px-2.5 py-1.5 font-mono text-[11px] font-bold","complete"===e.level&&"border-success/30 bg-success/[0.06] text-success","partial"===e.level&&"border-amber/30 bg-amber/[0.06] text-amber","missing"===e.level&&"border-white/10 text-muted-foreground"),children:[e.state," · ",e.level]},e.state))})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[[{value:a,set:s,options:["All categories",...v.packCategories.map(e=>e.category)]},{value:i,set:c,options:x},{value:d,set:l,options:["All statuses","current","pending","superseded"]},{value:m,set:u,options:["All agents",...z.AGENTS.map(e=>e.id)]}].map((e,r)=>(0,t.jsx)("select",{value:e.value,onChange:t=>e.set(t.target.value),className:"h-9 cursor-pointer rounded-md border bg-card px-2.5 text-[12px] font-semibold outline-none",children:e.options.map(e=>(0,t.jsx)("option",{value:e,children:e.startsWith("ag-")?w(e):e},e))},r)),(0,t.jsxs)("span",{className:"ml-auto font-mono text-[11px] tabular-nums text-muted-foreground",children:[y.length," of ",v.policyPacks.length," packs"]})]}),(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex h-9 items-center gap-3 border-b px-4 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1",children:"Pack"}),(0,t.jsx)("span",{className:"w-28 shrink-0",children:"Jurisdiction"}),(0,t.jsx)("span",{className:"w-40 shrink-0",children:"Category"}),(0,t.jsx)("span",{className:"w-32 shrink-0",children:"Last scanned"}),(0,t.jsx)("span",{className:"w-28 shrink-0",children:"Next review"}),(0,t.jsx)("span",{className:"w-24 shrink-0",children:"Status"}),(0,t.jsx)("span",{className:"w-36 shrink-0",children:"Consumed by"})]}),(0,t.jsx)("div",{ref:g,className:"thin-scroll max-h-[460px] divide-y divide-white/[0.05] overflow-y-auto",children:y.map(e=>(0,t.jsxs)("button",{onClick:()=>n(e.id),className:"row-42 flex w-full items-center gap-3 px-4 text-left transition-colors hover:bg-white/[0.03]",children:[(0,t.jsx)("span",{className:"min-w-0 flex-1 truncate text-[12.5px] font-semibold",children:e.name}),(0,t.jsx)("span",{className:"w-28 shrink-0 text-[11.5px] text-muted-foreground",children:e.jurisdiction}),(0,t.jsx)("span",{className:"w-40 shrink-0 text-[11px] text-muted-foreground",children:e.category}),(0,t.jsx)("span",{className:"w-32 shrink-0 font-mono text-[10px] text-dim",children:e.lastScanned}),(0,t.jsx)("span",{className:"w-28 shrink-0 font-mono text-[10px] text-dim",children:e.nextReview}),(0,t.jsx)("span",{className:"w-24 shrink-0",children:(0,t.jsx)("span",{className:(0,k.cn)("rounded border px-1.5 py-0.5 font-mono text-[9px] font-bold","current"===e.status&&"border-success/30 text-success","superseded"===e.status&&"border-white/15 text-muted-foreground line-through","pending"===e.status&&"border-amber/30 text-amber"),children:e.status})}),(0,t.jsxs)("span",{className:"flex w-36 shrink-0 flex-wrap gap-1",children:[e.dependents.agents.slice(0,2).map(e=>(0,t.jsx)("span",{className:"rounded border border-brand/25 bg-brand/[0.05] px-1 font-mono text-[8.5px] text-brand",children:w(e)},e)),e.dependents.agents.length>2&&(0,t.jsxs)("span",{className:"font-mono text-[9px] text-dim",children:["+",e.dependents.agents.length-2]})]})]},e.id))})]}),(0,t.jsx)("p",{className:"text-[11px] text-muted-foreground",children:"Every citation chip anywhere in the product deep-links to a pack’s source-text section. Refresh mechanisms: monitored URLs, scheduled re-crawls, customer uploads, forward-deployed ingestion."})]})}let C=[{name:"Employees",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"reads",projectedMaster:!0,fields:[{unified:"worker_id",workday:"Worker_Reference.Employee_ID (RaaS delta)",sf:"PerPerson.personIdExternal (OData v2)"},{unified:"legal_name",workday:"Legal_Name_Data.Formatted_Name",sf:"PerPersonal.formattedName"},{unified:"work_state",workday:"Location_Reference.Location_Address.State",sf:"EmpJob.location.state"},{unified:"hire_date",workday:"Hire_Date",sf:"EmpEmployment.startDate",conflict:"Rehires: Workday keeps original hire date; SF resets on rehire. Normalized to earliest, both retained."},{unified:"preferred_name",workday:"Preferred_Name_Data",sf:null}],unmappedNote:"SF PerPersonal.suffix has no Workday counterpart and stays source-only."},{name:"Employments",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"reads",projectedMaster:!0,fields:[{unified:"position_title",workday:"Position_Title (RaaS delta report field)",sf:"EmpJob.jobTitle (EC Job Information, OData v2)"},{unified:"manager_id",workday:"Manager_Reference.Employee_ID",sf:"EmpJob.managerId"},{unified:"fte",workday:"Position_Data.FTE_Percent",sf:"EmpJob.fte"},{unified:"employment_type",workday:"Worker_Type_Reference",sf:"EmpEmployment.employmentType",conflict:"Contingent taxonomy differs: Workday worker types vs SF employment classes. Mapped via a maintained crosswalk table."}]},{name:"Compensation",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"writes",fields:[{unified:"base_pay",workday:"Compensation_Data.Base_Pay (domain: Worker Data)",sf:"EmpCompensation.paycompvalue"},{unified:"pay_range",workday:"Compensation_Grade_Reference",sf:"EmpPayCompRecurring.payComponent",conflict:"Range granularity differs (grade vs component); normalized to min/mid/max with source retained."},{unified:"currency",workday:"Currency_Reference",sf:"EmpCompensation.currencyCode"}]},{name:"Absences",masteredBy:"Workday (Meridian) · SuccessFactors (Lakeshore)",oneward:"writes",projectedMaster:!0,fields:[{unified:"absence_type",workday:"Absence Management: Leave_Type_Reference",sf:"TimeOff.timeType"},{unified:"start_date",workday:"Leave_Start_Date",sf:"TimeOff.startDate"},{unified:"end_date",workday:"Leave_End_Date",sf:"TimeOff.endDate"},{unified:"protection_basis",workday:null,sf:null,conflict:"Neither system models the legal basis (PDL vs FMLA vs CFRA). Oneward masters this field today on the leave plan."}]},{name:"Time Off Balances",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"balance_hours",workday:"Time_Off_Balance (RaaS)",sf:"TimeAccountBalance.balance"},{unified:"accrual_rate",workday:"Accrual_Data",sf:null}],unmappedNote:"SF accrual rules live in Time Off configuration, not the API surface; balance-only for Lakeshore."},{name:"Timesheets",masteredBy:"UKG Pro WFM",oneward:"reads",fields:[{unified:"worked_hours",workday:null,sf:null},{unified:"ot_hours",workday:null,sf:null}],unmappedNote:"Sourced from UKG employee-changes and timecard reads; HCM systems carry no timecard detail."},{name:"Payroll Inputs",masteredBy:"ADP Workforce Now",oneward:"reads",fields:[{unified:"earnings_line",workday:null,sf:null},{unified:"deduction_line",workday:null,sf:null}],unmappedNote:"ADP Payroll Input use case is the sole source; Workday payroll results are read-only by design."},{name:"Documents",masteredBy:"Source-specific (Workday worker documents, Greenhouse attachments)",oneward:"writes",fields:[{unified:"document_type",workday:"Worker_Document_Category",sf:"Attachment.module"},{unified:"effective_date",workday:"Document_Date",sf:null}]},{name:"Performance",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"latest_rating",workday:"Performance_Rating (domain: Worker Data)",sf:"FormHeader.formDataId",conflict:"SF ratings live in forms, not a field; extracted with the MDF read and cycle-mapped."}]},{name:"Skills",masteredBy:"Workday (Meridian)",oneward:"reads",fields:[{unified:"skill_name",workday:"Skill_Reference",sf:null},{unified:"proficiency",workday:"Skill_Level",sf:null}],unmappedNote:"Lakeshore skills are unstructured resume text; extracted, not mapped."},{name:"Job Requisitions",masteredBy:"Greenhouse",oneward:"writes",fields:[{unified:"req_id",workday:null,sf:null},{unified:"posting_text",workday:null,sf:null}],unmappedNote:"Greenhouse Harvest is the source; posting writes are approval-gated."},{name:"Applications",masteredBy:"Greenhouse",oneward:"writes",fields:[{unified:"stage",workday:null,sf:null},{unified:"scorecards",workday:null,sf:null}]}],I=["Agents","Agent Identities","Workflows","Policies","Approvals","Evals","Audit","Leave plans (protection basis)"],N=[{id:"pr-001",name:"workday-raas-delta-reader",category:"Connectors",version:"2.5.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:12,lastModified:"2026-07-18",code:`export const workdayRaasDeltaReader = createTool({
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
});`},{id:"pr-042",name:"leave-eligibility-evaluator",category:"Agent tools",version:"3.1.0",origin:"Northline Health, 2025-Q3",reuse:9,deps:["sf-timeoff-balance-reader","ps-fmla"],dependents:11,lastModified:"2026-07-30",code:`export const leaveEligibilityEvaluator = createTool({
  id: "leave-eligibility-evaluator",
  description: "Evaluate FMLA and state program eligibility from hours, tenure, and worksite.",
  inputSchema: z.object({ employeeId: z.string(), state: z.string().length(2), leaveType: z.string() }),
  outputSchema: z.object({ eligible: z.array(programResultSchema), citations: z.array(z.string()) }),
  execute: async ({ context }) => evaluateEligibility(context),
});`},{id:"pr-043",name:"fmla-hours-counter",category:"Agent tools",version:"2.4.0",origin:"Northline Health, 2025-Q3",reuse:8,deps:["ukg-timeclock-punch-stream"],dependents:9,lastModified:"2026-07-19",code:`export const fmlaHoursCounter = createTool({
  id: "fmla-hours-counter",
  description: "Count hours worked in the 12 month lookback, per the 1,250 hour test.",
  inputSchema: z.object({ employeeId: z.string(), asOf: z.string() }),
  outputSchema: z.object({ hours: z.number(), meetsThreshold: z.boolean() }),
  execute: async ({ context }) => countLookbackHours(context.employeeId, context.asOf),
});`},{id:"pr-044",name:"state-leave-sequencer",category:"Agent tools",version:"2.2.1",origin:"Northline Health, 2025-Q3",reuse:8,deps:["leave-eligibility-evaluator"],dependents:8,lastModified:"2026-07-22",code:`export const stateLeaveSequencer = createTool({
  id: "state-leave-sequencer",
  description: "Sequence federal, state, and employer leave into ordered segments with pay and protection.",
  inputSchema: z.object({ eligibility: z.array(programResultSchema), startDate: z.string() }),
  outputSchema: z.object({ segments: z.array(segmentSchema) }),
  execute: async ({ context }) => sequenceSegments(context.eligibility, context.startDate),
});`},{id:"pr-045",name:"leave-concurrency-mapper",category:"Agent tools",version:"1.6.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-fmla","ps-ca-leave"],dependents:6,lastModified:"2026-06-25",code:`export const leaveConcurrencyMapper = createTool({
  id: "leave-concurrency-mapper",
  description: "Mark which programs run concurrently vs consecutively for a plan, from the governing policy packs.",
  inputSchema: z.object({ programs: z.array(z.string()), state: z.string().length(2) }),
  outputSchema: z.object({ concurrent: z.array(z.tuple([z.string(), z.string()])) }),
  execute: async ({ context }) => mapConcurrency(context.programs, context.state),
});`},{id:"pr-046",name:"intermittent-leave-tracker",category:"Agent tools",version:"1.4.2",origin:"Northline Health, 2025-Q3",reuse:6,deps:["ukg-timeclock-punch-stream","fmla-hours-counter"],dependents:5,lastModified:"2026-05-27",code:`export const intermittentLeaveTracker = createTool({
  id: "intermittent-leave-tracker",
  description: "Track intermittent usage in smallest increments and project exhaustion.",
  inputSchema: z.object({ planId: z.string() }),
  outputSchema: z.object({ usedHours: z.number(), remainingHours: z.number(), exhaustionDate: z.string() }),
  execute: async ({ context }) => trackIntermittent(context.planId),
});`},{id:"pr-047",name:"paid-benefit-estimator",category:"Agent tools",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-wa-pfml"],dependents:6,lastModified:"2026-07-06",code:`export const paidBenefitEstimator = createTool({
  id: "paid-benefit-estimator",
  description: "Estimate the weekly state benefit from wage history and the current benefit formula.",
  inputSchema: z.object({ employeeId: z.string(), program: z.string() }),
  outputSchema: z.object({ weeklyBenefit: z.number(), formulaVersion: z.string() }),
  execute: async ({ context }) => estimateBenefit(context.employeeId, context.program),
});`},{id:"pr-048",name:"return-to-work-scheduler",category:"Agent tools",version:"1.3.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:["ukg-schedule-reader"],dependents:4,lastModified:"2026-04-15",code:`export const returnToWorkScheduler = createTool({
  id: "return-to-work-scheduler",
  description: "Draft a return date and notify the schedule owner, respecting posted shifts.",
  inputSchema: z.object({ planId: z.string(), clearedDate: z.string() }),
  outputSchema: z.object({ proposedReturn: z.string(), notified: z.array(z.string()) }),
  execute: async ({ context }) => scheduleReturn(context.planId, context.clearedDate),
});`},{id:"pr-049",name:"ada-accommodation-flagger",category:"Agent tools",version:"1.2.1",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["pk-fed-ada"],dependents:3,lastModified:"2026-06-01",code:`export const adaAccommodationFlagger = createTool({
  id: "ada-accommodation-flagger",
  description: "Flag leave requests that may trigger the interactive process. Never diagnoses.",
  inputSchema: z.object({ requestText: z.string() }),
  outputSchema: z.object({ flag: z.boolean(), reason: z.string() }),
  execute: async ({ context }) => flagAccommodation(context.requestText),
});`},{id:"pr-050",name:"leave-balance-projector",category:"Agent tools",version:"1.5.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["ukg-accrual-balance-reader"],dependents:5,lastModified:"2026-05-20",code:`export const leaveBalanceProjector = createTool({
  id: "leave-balance-projector",
  description: "Project accrual balances at a future date including scheduled grants.",
  inputSchema: z.object({ employeeId: z.string(), targetDate: z.string() }),
  outputSchema: z.object({ projected: z.array(accrualSchema) }),
  execute: async ({ context }) => projectBalances(context.employeeId, context.targetDate),
});`},{id:"pr-051",name:"variance-explainer",category:"Agent tools",version:"2.7.0",origin:"Harborview Systems, 2024-Q4",reuse:9,deps:["adp-gl-extract-reader"],dependents:10,lastModified:"2026-07-27",code:`export const varianceExplainer = createTool({
  id: "variance-explainer",
  description: "Explain a payroll variance by decomposing it into staffing, rate, and hours drivers.",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string(), threshold: z.number() }),
  outputSchema: z.object({ drivers: z.array(driverSchema), narrative: z.string() }),
  execute: async ({ context }) => explainVariance(context),
});`},{id:"pr-052",name:"payroll-variance-detector",category:"Agent tools",version:"2.5.1",origin:"Harborview Systems, 2024-Q4",reuse:8,deps:["adp-payroll-input-batch"],dependents:9,lastModified:"2026-07-24",code:`export const payrollVarianceDetector = createTool({
  id: "payroll-variance-detector",
  description: "Compare staged payroll against the prior period and flag out-of-band deltas.",
  inputSchema: z.object({ batchId: z.string(), tolerancePct: z.number() }),
  outputSchema: z.object({ flags: z.array(varianceFlagSchema) }),
  execute: async ({ context }) => detectVariances(context.batchId, context.tolerancePct),
});`},{id:"pr-053",name:"retro-pay-calculator",category:"Agent tools",version:"1.7.0",origin:"Harborview Systems, 2024-Q4",reuse:7,deps:["adp-payroll-input-batch"],dependents:5,lastModified:"2026-06-13",code:`export const retroPayCalculator = createTool({
  id: "retro-pay-calculator",
  description: "Compute retroactive pay across periods for a late effective-dated change.",
  inputSchema: z.object({ employeeId: z.string(), changeId: z.string() }),
  outputSchema: z.object({ amount: z.number(), periods: z.array(z.string()) }),
  execute: async ({ context }) => computeRetro(context.employeeId, context.changeId),
});`},{id:"pr-054",name:"off-cycle-check-drafter",category:"Agent tools",version:"1.4.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:["adp-payroll-input-batch"],dependents:4,lastModified:"2026-05-16",code:`export const offCycleCheckDrafter = createTool({
  id: "off-cycle-check-drafter",
  description: "Draft an off-cycle payment with reason codes, routed for approval.",
  inputSchema: z.object({ employeeId: z.string(), amount: z.number(), reasonCode: z.string() }),
  outputSchema: z.object({ draftId: z.string() }),
  execute: async ({ context }) => draftOffCycle(context),
});`},{id:"pr-055",name:"garnishment-order-parser",category:"Agent tools",version:"1.6.1",origin:"Beacon Logistics, 2025-Q1",reuse:6,deps:[],dependents:4,lastModified:"2026-04-22",code:`export const garnishmentOrderParser = createTool({
  id: "garnishment-order-parser",
  description: "Extract order type, amounts, and priority from a scanned garnishment order.",
  inputSchema: z.object({ documentUrl: z.string().url() }),
  outputSchema: z.object({ orderType: z.string(), amount: z.number(), confidence: z.number() }),
  execute: async ({ context }) => parseOrder(context.documentUrl),
});`},{id:"pr-056",name:"overtime-anomaly-scorer",category:"Agent tools",version:"1.9.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ukg-timeclock-punch-stream","ps-wage-hour"],dependents:6,lastModified:"2026-07-09",code:`export const overtimeAnomalyScorer = createTool({
  id: "overtime-anomaly-scorer",
  description: "Score weekly overtime patterns against location baselines and the wage-hour corpus.",
  inputSchema: z.object({ locationId: z.string(), weekOf: z.string() }),
  outputSchema: z.object({ anomalies: z.array(anomalySchema) }),
  execute: async ({ context }) => scoreOvertime(context.locationId, context.weekOf),
});`},{id:"pr-057",name:"pay-period-reconciler",category:"Agent tools",version:"2.0.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["adp-payroll-input-batch","ukg-employee-changes-poller"],dependents:7,lastModified:"2026-07-16",code:`export const payPeriodReconciler = createTool({
  id: "pay-period-reconciler",
  description: "Reconcile HCM change events against payroll inputs for one period.",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
  outputSchema: z.object({ matched: z.number(), unmatched: z.array(unmatchedSchema) }),
  execute: async ({ context }) => reconcilePeriod(context.payGroupCode, context.payPeriodEndDate),
});`},{id:"pr-058",name:"gl-mapping-suggester",category:"Agent tools",version:"1.2.0",origin:"Harborview Systems, 2024-Q4",reuse:5,deps:["adp-gl-extract-reader"],dependents:3,lastModified:"2026-02-26",code:`export const glMappingSuggester = createTool({
  id: "gl-mapping-suggester",
  description: "Suggest ledger mappings for unmapped earning codes from historical postings.",
  inputSchema: z.object({ earningCode: z.string() }),
  outputSchema: z.object({ suggestions: z.array(mappingSchema) }),
  execute: async ({ context }) => suggestMapping(context.earningCode),
});`},{id:"pr-059",name:"staffing-event-correlator",category:"Agent tools",version:"2.3.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:["ukg-employee-changes-poller","workday-bp-event-listener"],dependents:8,lastModified:"2026-07-12",code:`export const staffingEventCorrelator = createTool({
  id: "staffing-event-correlator",
  description: "Correlate hires, terms, and transfers across HCM and timekeeping to explain headcount moves.",
  inputSchema: z.object({ orgId: z.string(), from: z.string(), to: z.string() }),
  outputSchema: z.object({ correlated: z.array(correlationSchema) }),
  execute: async ({ context }) => correlateEvents(context.orgId, context.from, context.to),
});`},{id:"pr-060",name:"posting-jurisdiction-resolver",category:"Agent tools",version:"2.1.0",origin:"Crestline Foods, 2025-Q2",reuse:8,deps:["ps-co-epewa","ps-ca-sb1162"],dependents:7,lastModified:"2026-07-20",code:`export const postingJurisdictionResolver = createTool({
  id: "posting-jurisdiction-resolver",
  description: "Resolve which pay transparency packs apply from worksite, remote policy, and posting reach.",
  inputSchema: z.object({ jobId: z.number(), remoteEligible: z.boolean() }),
  outputSchema: z.object({ jurisdictions: z.array(z.string()), strictest: z.string() }),
  execute: async ({ context }) => resolveJurisdictions(context.jobId, context.remoteEligible),
});`},{id:"pr-061",name:"range-goodfaith-checker",category:"Agent tools",version:"1.8.2",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["ps-ca-sb1162","sf-odata-ec-compinfo"],dependents:6,lastModified:"2026-07-03",code:`export const rangeGoodfaithChecker = createTool({
  id: "range-goodfaith-checker",
  description: "Check a posted range against internal bands and incumbent pay for good faith.",
  inputSchema: z.object({ jobId: z.number(), min: z.number(), max: z.number() }),
  outputSchema: z.object({ pass: z.boolean(), findings: z.array(z.string()) }),
  execute: async ({ context }) => checkRange(context.jobId, context.min, context.max),
});`},{id:"pr-062",name:"comp-band-placement-checker",category:"Agent tools",version:"1.5.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["sf-odata-ec-compinfo"],dependents:5,lastModified:"2026-06-19",code:`export const compBandPlacementChecker = createTool({
  id: "comp-band-placement-checker",
  description: "Validate a proposed salary against band, compa-ratio limits, and geo tier.",
  inputSchema: z.object({ jobCode: z.string(), proposed: z.number(), geoTier: z.string() }),
  outputSchema: z.object({ inBand: z.boolean(), compaRatio: z.number() }),
  execute: async ({ context }) => checkPlacement(context),
});`},{id:"pr-063",name:"geo-differential-resolver",category:"Agent tools",version:"1.3.1",origin:"Meridian Group, 2026-Q1",reuse:5,deps:[],dependents:3,lastModified:"2026-05-11",code:`export const geoDifferentialResolver = createTool({
  id: "geo-differential-resolver",
  description: "Resolve the pay differential tier for a work location, with remote fallbacks.",
  inputSchema: z.object({ location: z.string(), remote: z.boolean() }),
  outputSchema: z.object({ tier: z.string(), multiplier: z.number() }),
  execute: async ({ context }) => resolveGeoTier(context.location, context.remote),
});`},{id:"pr-064",name:"merit-matrix-applier",category:"Agent tools",version:"1.6.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["workday-comp-writeback"],dependents:4,lastModified:"2026-06-28",code:`export const meritMatrixApplier = createTool({
  id: "merit-matrix-applier",
  description: "Apply the merit matrix to a population and stage proposed increases.",
  inputSchema: z.object({ cycleId: z.string(), populationId: z.string() }),
  outputSchema: z.object({ proposals: z.array(proposalSchema) }),
  execute: async ({ context }) => applyMatrix(context.cycleId, context.populationId),
});`},{id:"pr-065",name:"offer-comp-benchmarker",category:"Agent tools",version:"1.4.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:4,lastModified:"2026-05-25",code:`export const offerCompBenchmarker = createTool({
  id: "offer-comp-benchmarker",
  description: "Benchmark a draft offer against band, peer offers, and the posted range.",
  inputSchema: z.object({ applicationId: z.number(), proposed: z.number() }),
  outputSchema: z.object({ percentile: z.number(), notes: z.array(z.string()) }),
  execute: async ({ context }) => benchmarkOffer(context.applicationId, context.proposed),
});`},{id:"pr-066",name:"equity-vesting-explainer",category:"Agent tools",version:"1.1.0",origin:"Meridian Group, 2026-Q1",reuse:4,deps:[],dependents:2,lastModified:"2026-03-30",code:`export const equityVestingExplainer = createTool({
  id: "equity-vesting-explainer",
  description: "Explain vesting schedules and upcoming events in plain language.",
  inputSchema: z.object({ employeeId: z.string() }),
  outputSchema: z.object({ narrative: z.string(), nextVestDate: z.string() }),
  execute: async ({ context }) => explainVesting(context.employeeId),
});`},{id:"pr-067",name:"i9-deadline-tracker",category:"Agent tools",version:"2.2.0",origin:"Crestline Foods, 2025-Q2",reuse:8,deps:["greenhouse-webhook-receiver","pk-fed-i9"],dependents:6,lastModified:"2026-07-14",code:`export const i9DeadlineTracker = createTool({
  id: "i9-deadline-tracker",
  description: "Track I-9 section deadlines from the start date and escalate before they lapse.",
  inputSchema: z.object({ hireId: z.string(), startDate: z.string() }),
  outputSchema: z.object({ section2Due: z.string(), status: z.string() }),
  execute: async ({ context }) => trackDeadlines(context.hireId, context.startDate),
});`},{id:"pr-068",name:"cobra-notice-scheduler",category:"Agent tools",version:"1.7.1",origin:"Northline Health, 2025-Q3",reuse:7,deps:["ps-cobra","smtp-notice-mailer"],dependents:5,lastModified:"2026-06-21",code:`export const cobraNoticeScheduler = createTool({
  id: "cobra-notice-scheduler",
  description: "Schedule election notices from qualifying event dates per the timing pack.",
  inputSchema: z.object({ eventId: z.string(), eventDate: z.string() }),
  outputSchema: z.object({ noticeDate: z.string(), electionDeadline: z.string() }),
  execute: async ({ context }) => scheduleNotices(context.eventId, context.eventDate),
});`},{id:"pr-069",name:"benefits-event-classifier",category:"Agent tools",version:"1.5.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["workday-bp-event-listener"],dependents:5,lastModified:"2026-05-29",code:`export const benefitsEventClassifier = createTool({
  id: "benefits-event-classifier",
  description: "Classify life events into qualifying event categories with evidence requirements.",
  inputSchema: z.object({ description: z.string(), eventDate: z.string() }),
  outputSchema: z.object({ category: z.string(), evidenceNeeded: z.array(z.string()) }),
  execute: async ({ context }) => classifyEvent(context.description, context.eventDate),
});`},{id:"pr-070",name:"dependent-verification-checker",category:"Agent tools",version:"1.2.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:[],dependents:3,lastModified:"2026-04-03",code:`export const dependentVerificationChecker = createTool({
  id: "dependent-verification-checker",
  description: "Check submitted documents against dependent eligibility rules.",
  inputSchema: z.object({ dependentId: z.string(), documentIds: z.array(z.string()) }),
  outputSchema: z.object({ verified: z.boolean(), gaps: z.array(z.string()) }),
  execute: async ({ context }) => verifyDependent(context.dependentId, context.documentIds),
});`},{id:"pr-071",name:"aca-hours-aggregator",category:"Agent tools",version:"1.8.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ukg-timeclock-punch-stream","pk-fed-aca"],dependents:5,lastModified:"2026-06-16",code:`export const acaHoursAggregator = createTool({
  id: "aca-hours-aggregator",
  description: "Aggregate measurement period hours and flag full-time status changes.",
  inputSchema: z.object({ populationId: z.string(), period: z.string() }),
  outputSchema: z.object({ statusChanges: z.array(statusChangeSchema) }),
  execute: async ({ context }) => aggregateHours(context.populationId, context.period),
});`},{id:"pr-072",name:"resume-evidence-extractor",category:"Agent tools",version:"2.6.0",origin:"Crestline Foods, 2025-Q2",reuse:9,deps:["greenhouse-harvest-client"],dependents:9,lastModified:"2026-07-28",code:`export const resumeEvidenceExtractor = createTool({
  id: "resume-evidence-extractor",
  description: "Extract skill and experience evidence with spans quoted from the source document.",
  inputSchema: z.object({ candidateId: z.number(), rubricId: z.string() }),
  outputSchema: z.object({ evidence: z.array(evidenceSpanSchema) }),
  execute: async ({ context }) => extractEvidence(context.candidateId, context.rubricId),
});`},{id:"pr-073",name:"candidate-dedupe-matcher",category:"Agent tools",version:"1.9.0",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["greenhouse-harvest-client"],dependents:5,lastModified:"2026-06-06",code:`export const candidateDedupeMatcher = createTool({
  id: "candidate-dedupe-matcher",
  description: "Match incoming candidates against existing records with confidence scoring.",
  inputSchema: z.object({ candidateId: z.number() }),
  outputSchema: z.object({ matches: z.array(matchSchema) }),
  execute: async ({ context }) => findDuplicates(context.candidateId),
});`},{id:"pr-074",name:"req-intake-normalizer",category:"Agent tools",version:"1.4.1",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-harvest-client"],dependents:4,lastModified:"2026-05-02",code:`export const reqIntakeNormalizer = createTool({
  id: "req-intake-normalizer",
  description: "Normalize free-text req intakes into structured job, level, and location fields.",
  inputSchema: z.object({ intakeText: z.string() }),
  outputSchema: z.object({ jobCode: z.string(), level: z.string(), locations: z.array(z.string()) }),
  execute: async ({ context }) => normalizeIntake(context.intakeText),
});`},{id:"pr-075",name:"interview-loop-scheduler",category:"Agent tools",version:"1.6.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["msgraph-calendar-reader","greenhouse-harvest-client"],dependents:4,lastModified:"2026-06-10",code:`export const interviewLoopScheduler = createTool({
  id: "interview-loop-scheduler",
  description: "Propose interview loops from panel availability and candidate windows.",
  inputSchema: z.object({ applicationId: z.number(), panel: z.array(z.string()) }),
  outputSchema: z.object({ proposals: z.array(slotSchema) }),
  execute: async ({ context }) => proposeLoops(context.applicationId, context.panel),
});`},{id:"pr-076",name:"offer-letter-assembler",category:"Agent tools",version:"2.0.1",origin:"Crestline Foods, 2025-Q2",reuse:7,deps:["docusign-envelope-sender","range-goodfaith-checker"],dependents:6,lastModified:"2026-07-17",code:`export const offerLetterAssembler = createTool({
  id: "offer-letter-assembler",
  description: "Assemble an offer letter from approved clauses, comp data, and jurisdiction addenda.",
  inputSchema: z.object({ applicationId: z.number(), packageId: z.string() }),
  outputSchema: z.object({ documentId: z.string(), clausesUsed: z.array(z.string()) }),
  execute: async ({ context }) => assembleOffer(context.applicationId, context.packageId),
});`},{id:"pr-077",name:"background-check-gate",category:"Agent tools",version:"1.3.0",origin:"Crestline Foods, 2025-Q2",reuse:6,deps:["greenhouse-webhook-receiver","pk-fed-fcra"],dependents:4,lastModified:"2026-04-27",code:`export const backgroundCheckGate = createTool({
  id: "background-check-gate",
  description: "Hold onboarding until check results clear; adverse findings route to HR per the FCRA pack.",
  inputSchema: z.object({ hireId: z.string() }),
  outputSchema: z.object({ cleared: z.boolean(), route: z.string() }),
  execute: async ({ context }) => gateOnCheck(context.hireId),
});`},{id:"pr-078",name:"onboarding-task-sequencer",category:"Agent tools",version:"1.7.0",origin:"Meridian Group, 2026-Q1",reuse:7,deps:["okta-scim-provisioner","docusign-envelope-sender"],dependents:6,lastModified:"2026-07-01",code:`export const onboardingTaskSequencer = createTool({
  id: "onboarding-task-sequencer",
  description: "Sequence provisioning, forms, and training tasks from start date and role.",
  inputSchema: z.object({ hireId: z.string(), roleProfile: z.string() }),
  outputSchema: z.object({ tasks: z.array(taskSchema) }),
  execute: async ({ context }) => sequenceTasks(context.hireId, context.roleProfile),
});`},{id:"pr-079",name:"term-checklist-generator",category:"Agent tools",version:"2.1.0",origin:"Beacon Logistics, 2025-Q1",reuse:8,deps:["workday-bp-event-listener"],dependents:7,lastModified:"2026-07-23",code:`export const termChecklistGenerator = createTool({
  id: "term-checklist-generator",
  description: "Generate a termination checklist keyed to state, role, and system footprint.",
  inputSchema: z.object({ employeeId: z.string(), termDate: z.string(), reason: z.string() }),
  outputSchema: z.object({ items: z.array(checklistItemSchema) }),
  execute: async ({ context }) => generateChecklist(context),
});`},{id:"pr-080",name:"access-revocation-verifier",category:"Agent tools",version:"2.3.1",origin:"Oneward Core, 2024-Q3",reuse:8,deps:["okta-lifecycle-deactivate","msgraph-user-disable"],dependents:8,lastModified:"2026-07-31",code:`export const accessRevocationVerifier = createTool({
  id: "access-revocation-verifier",
  description: "Verify every system in the access inventory was actually revoked, with evidence.",
  inputSchema: z.object({ employeeId: z.string(), termCaseId: z.string() }),
  outputSchema: z.object({ verified: z.array(z.string()), outstanding: z.array(z.string()) }),
  execute: async ({ context }) => verifyRevocation(context.employeeId, context.termCaseId),
});`},{id:"pr-081",name:"final-pay-rules-checker",category:"Agent tools",version:"1.5.0",origin:"Beacon Logistics, 2025-Q1",reuse:7,deps:["ps-ca-finalpay","ps-tx-payday"],dependents:5,lastModified:"2026-06-24",code:`export const finalPayRulesChecker = createTool({
  id: "final-pay-rules-checker",
  description: "Check final pay timing and required inclusions for the worker's state pack.",
  inputSchema: z.object({ employeeId: z.string(), termDate: z.string(), state: z.string().length(2) }),
  outputSchema: z.object({ dueBy: z.string(), mustInclude: z.array(z.string()) }),
  execute: async ({ context }) => checkFinalPay(context),
});`},{id:"pr-082",name:"policy-passage-retriever",category:"Agent tools",version:"3.2.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:[],dependents:12,lastModified:"2026-08-01",code:`export const policyPassageRetriever = createTool({
  id: "policy-passage-retriever",
  description: "Retrieve Policy Library passages with pack id, version, and effective date attached.",
  inputSchema: z.object({ query: z.string(), jurisdiction: z.string().optional(), topK: z.number() }),
  outputSchema: z.object({ passages: z.array(passageSchema) }),
  execute: async ({ context }) => retriever.search(context.query, context.jurisdiction, context.topK),
});`},{id:"pr-083",name:"handbook-conflict-detector",category:"Agent tools",version:"1.4.0",origin:"Meridian Group, 2026-Q1",reuse:6,deps:["policy-passage-retriever"],dependents:4,lastModified:"2026-06-02",code:`export const handbookConflictDetector = createTool({
  id: "handbook-conflict-detector",
  description: "Find handbook passages that conflict with current statute packs.",
  inputSchema: z.object({ handbookPackId: z.string(), statutePackIds: z.array(z.string()) }),
  outputSchema: z.object({ conflicts: z.array(conflictSchema) }),
  execute: async ({ context }) => detectConflicts(context.handbookPackId, context.statutePackIds),
});`},{id:"pr-084",name:"citation-formatter",category:"Agent tools",version:"2.8.0",origin:"Oneward Core, 2024-Q3",reuse:9,deps:["policy-passage-retriever"],dependents:11,lastModified:"2026-07-25",code:`export const citationFormatter = createTool({
  id: "citation-formatter",
  description: "Format retrieved passages into inline citations with pack id and effective date.",
  inputSchema: z.object({ passages: z.array(passageSchema) }),
  outputSchema: z.object({ citations: z.array(citationSchema) }),
  execute: async ({ context }) => formatCitations(context.passages),
});`},{id:"pr-085",name:"pii-redactor",category:"Agent tools",version:"2.4.0",origin:"Oneward Core, 2024-Q3",reuse:8,deps:[],dependents:10,lastModified:"2026-07-10",code:`export const piiRedactor = createTool({
  id: "pii-redactor",
  description: "Redact direct identifiers before text leaves the trust boundary.",
  inputSchema: z.object({ text: z.string(), profile: z.enum(["strict", "analytics"]) }),
  outputSchema: z.object({ redacted: z.string(), entitiesFound: z.array(z.string()) }),
  execute: async ({ context }) => redact(context.text, context.profile),
});`},{id:"pr-086",name:"policy-pack-resolver",category:"Agent tools",version:"1.1.0",origin:"Oneward Core, 2026-Q2",reuse:4,deps:[],dependents:5,lastModified:"2026-07-26",code:`export const policyPackResolver = createTool({
  id: "policy-pack-resolver",
  description: "Resolve which Policy Library packs govern a question from work state and domain; returns the strictest applicable pack first.",
  inputSchema: z.object({
    state: z.string().length(2),
    domain: z.enum(["leave", "wage-hour", "final-pay", "transparency", "onboarding"]),
  }),
  outputSchema: z.object({ packIds: z.array(z.string()), strictest: z.string().nullable() }),
  execute: async ({ context }) => library.resolve(context.state, context.domain),
});`},{id:"pr-087",name:"min-wage-rate-lookup",category:"Agent tools",version:"1.0.2",origin:"Oneward Core, 2026-Q2",reuse:3,deps:["ps-wage-hour"],dependents:3,lastModified:"2026-07-13",code:`export const minWageRateLookup = createTool({
  id: "min-wage-rate-lookup",
  description: "Look up the applicable minimum wage for a worksite, layering local ordinances over the state rate.",
  inputSchema: z.object({ state: z.string().length(2), city: z.string().optional(), asOf: z.string() }),
  outputSchema: z.object({ hourlyRate: z.number(), source: z.string(), localOrdinanceApplies: z.boolean() }),
  execute: async ({ context }) => wageTable.lookup(context.state, context.city, context.asOf),
});`},{id:"pr-088",name:"onboarding-disclosure-selector",category:"Agent tools",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:3,deps:["pk-onb-ca","pk-onb-ny"],dependents:2,lastModified:"2026-07-07",code:`export const onboardingDisclosureSelector = createTool({
  id: "onboarding-disclosure-selector",
  description: "Select the state onboarding disclosures a new hire must receive from work state and classification.",
  inputSchema: z.object({ state: z.string().length(2), flsaStatus: z.enum(["exempt", "non-exempt"]) }),
  outputSchema: z.object({
    disclosures: z.array(z.object({ packId: z.string(), form: z.string(), deadline: z.string() })),
  }),
  execute: async ({ context }) => selector.forState(context.state, context.flsaStatus),
});`},{id:"pr-089",name:"leave-plan-approval-flow",category:"Workflow templates",version:"2.2.0",origin:"Northline Health, 2025-Q3",reuse:6,deps:["state-leave-sequencer","leave-eligibility-evaluator"],dependents:3,lastModified:"2026-07-21",code:`export const leavePlanApprovalFlow = createWorkflow({
  id: "leave-plan-approval-flow",
  inputSchema: z.object({ requestId: z.string() }),
})
  .then(evaluateEligibilityStep)
  .then(sequenceSegmentsStep)
  .then(draftPlanStep)
  .then(humanApprovalStep)
  .commit();`},{id:"pr-090",name:"pre-run-audit-cycle",category:"Workflow templates",version:"2.0.0",origin:"Harborview Systems, 2024-Q4",reuse:6,deps:["payroll-variance-detector","variance-explainer"],dependents:4,lastModified:"2026-07-26",code:`export const preRunAuditCycle = createWorkflow({
  id: "pre-run-audit-cycle",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
})
  .then(stageInputsStep)
  .then(detectVariancesStep)
  .then(explainFlagsStep)
  .then(signoffStep)
  .commit();`},{id:"pr-091",name:"posting-compliance-draft",category:"Workflow templates",version:"1.8.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:["posting-jurisdiction-resolver","range-goodfaith-checker"],dependents:2,lastModified:"2026-07-13",code:`export const postingComplianceDraft = createWorkflow({
  id: "posting-compliance-draft",
  inputSchema: z.object({ jobId: z.number() }),
})
  .then(resolveJurisdictionsStep)
  .then(checkRangeStep)
  .then(draftPostingStep)
  .commit();`},{id:"pr-092",name:"termination-cascade",category:"Workflow templates",version:"2.4.0",origin:"Beacon Logistics, 2025-Q1",reuse:6,deps:["term-checklist-generator","access-revocation-verifier","final-pay-rules-checker"],dependents:3,lastModified:"2026-07-29",code:`export const terminationCascade = createWorkflow({
  id: "termination-cascade",
  inputSchema: z.object({ employeeId: z.string(), termDate: z.string() }),
})
  .then(generateChecklistStep)
  .then(revokeAccessStep)
  .then(verifyRevocationStep)
  .then(finalPayCheckStep)
  .commit();`},{id:"pr-093",name:"new-hire-onboarding-cascade",category:"Workflow templates",version:"1.9.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["onboarding-task-sequencer","okta-scim-provisioner"],dependents:2,lastModified:"2026-06-29",code:`export const newHireOnboardingCascade = createWorkflow({
  id: "new-hire-onboarding-cascade",
  inputSchema: z.object({ hireId: z.string() }),
})
  .then(sequenceTasksStep)
  .then(provisionAccountsStep)
  .then(sendWelcomePacketStep)
  .commit();`},{id:"pr-094",name:"payroll-close-checklist",category:"Workflow templates",version:"1.5.0",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["pay-period-reconciler"],dependents:2,lastModified:"2026-06-12",code:`export const payrollCloseChecklist = createWorkflow({
  id: "payroll-close-checklist",
  inputSchema: z.object({ payGroupCode: z.string(), payPeriodEndDate: z.string() }),
})
  .then(reconcilePeriodStep)
  .then(resolveUnmatchedStep)
  .then(closeAttestationStep)
  .commit();`},{id:"pr-095",name:"off-cycle-payment-approval",category:"Workflow templates",version:"1.3.1",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["off-cycle-check-drafter"],dependents:1,lastModified:"2026-05-18",code:`export const offCyclePaymentApproval = createWorkflow({
  id: "off-cycle-payment-approval",
  inputSchema: z.object({ draftId: z.string() }),
})
  .then(validateReasonCodeStep)
  .then(managerApprovalStep)
  .then(stagePaymentStep)
  .commit();`},{id:"pr-096",name:"garnishment-intake-flow",category:"Workflow templates",version:"1.2.0",origin:"Beacon Logistics, 2025-Q1",reuse:3,deps:["garnishment-order-parser"],dependents:1,lastModified:"2026-04-24",code:`export const garnishmentIntakeFlow = createWorkflow({
  id: "garnishment-intake-flow",
  inputSchema: z.object({ documentUrl: z.string() }),
})
  .then(parseOrderStep)
  .then(confidenceGateStep)
  .then(setupDeductionDraftStep)
  .commit();`},{id:"pr-097",name:"merit-cycle-orchestrator",category:"Workflow templates",version:"1.6.0",origin:"Meridian Group, 2026-Q1",reuse:4,deps:["merit-matrix-applier","comp-band-placement-checker"],dependents:2,lastModified:"2026-07-05",code:`export const meritCycleOrchestrator = createWorkflow({
  id: "merit-cycle-orchestrator",
  inputSchema: z.object({ cycleId: z.string() }),
})
  .then(applyMatrixStep)
  .then(bandCheckStep)
  .then(managerReviewStep)
  .then(batchWritebackStep)
  .commit();`},{id:"pr-098",name:"comp-change-approval-flow",category:"Workflow templates",version:"1.4.0",origin:"Meridian Group, 2026-Q1",reuse:5,deps:["workday-comp-writeback"],dependents:2,lastModified:"2026-06-20",code:`export const compChangeApprovalFlow = createWorkflow({
  id: "comp-change-approval-flow",
  inputSchema: z.object({ employeeId: z.string(), proposed: z.number() }),
})
  .then(placementCheckStep)
  .then(twoStepApprovalStep)
  .then(stageDraftEventStep)
  .commit();`},{id:"pr-099",name:"offer-approval-chain",category:"Workflow templates",version:"1.7.0",origin:"Crestline Foods, 2025-Q2",reuse:5,deps:["offer-letter-assembler","offer-comp-benchmarker"],dependents:2,lastModified:"2026-07-07",code:`export const offerApprovalChain = createWorkflow({
  id: "offer-approval-chain",
  inputSchema: z.object({ applicationId: z.number() }),
})
  .then(benchmarkOfferStep)
  .then(recruitingLeadApprovalStep)
  .then(assembleLetterStep)
  .then(sendForSignatureStep)
  .commit();`},{id:"pr-100",name:"req-to-posting-pipeline",category:"Workflow templates",version:"1.5.2",origin:"Crestline Foods, 2025-Q2",reuse:4,deps:["req-intake-normalizer","greenhouse-job-post-publisher"],dependents:2,lastModified:"2026-06-15",code:`export const reqToPostingPipeline = createWorkflow({
  id: "req-to-posting-pipeline",
  inputSchema: z.object({ intakeText: z.string() }),
})
  .then(normalizeIntakeStep)
  .then(complianceDraftStep)
  .then(publishDraftStep)
  .commit();`},{id:"pr-101",name:"interview-feedback-chase",category:"Workflow templates",version:"1.1.0",origin:"Crestline Foods, 2025-Q2",reuse:3,deps:["slack-events-bridge"],dependents:1,lastModified:"2026-05-09",code:`export const interviewFeedbackChase = createWorkflow({
  id: "interview-feedback-chase",
  inputSchema: z.object({ applicationId: z.number() }),
})
  .then(findMissingScorecardsStep)
  .then(nudgeInterviewersStep)
  .then(escalateAfterTwoNudgesStep)
  .commit();`},{id:"pr-102",name:"requisition-close-flow",category:"Workflow templates",version:"1.0.2",origin:"Crestline Foods, 2025-Q2",reuse:2,deps:["greenhouse-harvest-client"],dependents:0,lastModified:"2026-03-27",code:`export const requisitionCloseFlow = createWorkflow({
  id: "requisition-close-flow",
  inputSchema: z.object({ jobId: z.number() }),
})
  .then(rejectRemainingCandidatesStep)
  .then(archivePostingsStep)
  .then(notifyHiringTeamStep)
  .commit();`},{id:"pr-103",name:"leave-intake-triage",category:"Workflow templates",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:["leave-eligibility-evaluator","servicenow-hr-case-bridge"],dependents:2,lastModified:"2026-07-18",code:`export const leaveIntakeTriage = createWorkflow({
  id: "leave-intake-triage",
  inputSchema: z.object({ caseId: z.string() }),
})
  .then(classifyRequestStep)
  .then(eligibilityPrecheckStep)
  .then(routeToSpecialistStep)
  .commit();`},{id:"pr-104",name:"rtw-clearance-flow",category:"Workflow templates",version:"1.2.1",origin:"Northline Health, 2025-Q3",reuse:3,deps:["return-to-work-scheduler"],dependents:1,lastModified:"2026-05-23",code:`export const rtwClearanceFlow = createWorkflow({
  id: "rtw-clearance-flow",
  inputSchema: z.object({ planId: z.string() }),
})
  .then(collectClearanceStep)
  .then(proposeReturnDateStep)
  .then(notifySchedulerStep)
  .commit();`},{id:"pr-105",name:"open-enrollment-sweep",category:"Workflow templates",version:"1.4.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["carrier-834-eligibility-feed"],dependents:1,lastModified:"2026-06-26",code:`export const openEnrollmentSweep = createWorkflow({
  id: "open-enrollment-sweep",
  inputSchema: z.object({ planYear: z.string() }),
})
  .then(findIncompleteElectionsStep)
  .then(sendReminderWaveStep)
  .then(buildCarrierFilesStep)
  .commit();`},{id:"pr-106",name:"qualifying-event-flow",category:"Workflow templates",version:"1.3.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["benefits-event-classifier","cobra-notice-scheduler"],dependents:1,lastModified:"2026-06-05",code:`export const qualifyingEventFlow = createWorkflow({
  id: "qualifying-event-flow",
  inputSchema: z.object({ eventId: z.string() }),
})
  .then(classifyEventStep)
  .then(collectEvidenceStep)
  .then(scheduleNoticesStep)
  .commit();`},{id:"pr-107",name:"contractor-conversion-flow",category:"Workflow templates",version:"1.1.1",origin:"Beacon Logistics, 2025-Q1",reuse:2,deps:["onboarding-task-sequencer"],dependents:0,lastModified:"2026-04-11",code:`export const contractorConversionFlow = createWorkflow({
  id: "contractor-conversion-flow",
  inputSchema: z.object({ contractorId: z.string(), startDate: z.string() }),
})
  .then(closeVendorRecordStep)
  .then(createHireRecordStep)
  .then(sequenceOnboardingStep)
  .commit();`},{id:"pr-108",name:"org-change-ripple-review",category:"Workflow templates",version:"1.2.0",origin:"Meridian Group, 2026-Q1",reuse:3,deps:["staffing-event-correlator"],dependents:1,lastModified:"2026-05-31",code:`export const orgChangeRippleReview = createWorkflow({
  id: "org-change-ripple-review",
  inputSchema: z.object({ changeId: z.string() }),
})
  .then(correlateDownstreamStep)
  .then(draftImpactSummaryStep)
  .then(hrbpReviewStep)
  .commit();`},{id:"pr-109",name:"policy-refresh-review-flow",category:"Workflow templates",version:"1.6.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:["policy-passage-retriever","handbook-conflict-detector"],dependents:2,lastModified:"2026-07-04",code:`export const policyRefreshReviewFlow = createWorkflow({
  id: "policy-refresh-review-flow",
  inputSchema: z.object({ packId: z.string() }),
})
  .then(diffAgainstCurrentStep)
  .then(findAffectedConsumersStep)
  .then(counselReviewStep)
  .then(promoteVersionStep)
  .commit();`},{id:"pr-110",name:"monitor-finding-triage",category:"Workflow templates",version:"1.5.0",origin:"Oneward Core, 2024-Q3",reuse:5,deps:["slack-events-bridge"],dependents:2,lastModified:"2026-07-24",code:`export const monitorFindingTriage = createWorkflow({
  id: "monitor-finding-triage",
  inputSchema: z.object({ findingId: z.string() }),
})
  .then(enrichFindingStep)
  .then(severityGateStep)
  .then(postToChannelStep)
  .commit();`},{id:"pr-111",name:"state-onboarding-packet-flow",category:"Workflow templates",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:3,deps:["onboarding-disclosure-selector","docusign-envelope-sender"],dependents:1,lastModified:"2026-07-20",code:`export const stateOnboardingPacketFlow = createWorkflow({
  id: "state-onboarding-packet-flow",
  inputSchema: z.object({ hireId: z.string(), state: z.string().length(2) }),
})
  .then(selectDisclosuresStep)
  .then(assemblePacketStep)
  .then(sendForSignatureStep)
  .commit();`},{id:"pr-112",name:"new-state-registration-flow",category:"Workflow templates",version:"1.0.1",origin:"Oneward Core, 2026-Q2",reuse:2,deps:["policy-pack-resolver"],dependents:1,lastModified:"2026-07-08",code:`export const newStateRegistrationFlow = createWorkflow({
  id: "new-state-registration-flow",
  inputSchema: z.object({ state: z.string().length(2), firstEmployeeId: z.string() }),
})
  .then(resolveStatePacksStep)
  .then(registrationChecklistStep)
  .then(payrollSetupDraftStep)
  .then(complianceSignoffStep)
  .commit();`},{id:"pr-113",name:"i9-reverification-chase",category:"Workflow templates",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:2,deps:["i9-deadline-tracker"],dependents:0,lastModified:"2026-06-30",code:`export const i9ReverificationChase = createWorkflow({
  id: "i9-reverification-chase",
  inputSchema: z.object({ employeeId: z.string(), workAuthExpiry: z.string() }),
})
  .then(scheduleReverifyWindowStep)
  .then(notifyEmployeeStep)
  .then(escalateBeforeExpiryStep)
  .commit();`},{id:"pr-114",name:"handbook-annual-review-flow",category:"Workflow templates",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:2,deps:["handbook-conflict-detector"],dependents:1,lastModified:"2026-07-15",code:`export const handbookAnnualReviewFlow = createWorkflow({
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
}`},{id:"pr-130",name:"span-tree-viewer",category:"App components",version:"2.1.0",origin:"Oneward Core, 2024-Q3",reuse:6,deps:[],dependents:5,lastModified:"2026-07-23",code:`export function SpanTreeViewer({ run, onSelectSpan }: {
  run: RunV2;
  onSelectSpan: (spanId: string) => void;
}) {
  // two-layer trace: task spans collapsed, tool and llm children on expand
  return <TreeRoot spans={run.spans} onSelect={onSelectSpan} />;
}`},{id:"pr-131",name:"leave-timeline",category:"App components",version:"1.8.0",origin:"Northline Health, 2025-Q3",reuse:5,deps:[],dependents:4,lastModified:"2026-07-17",code:`export function LeaveTimeline({ plan, compact = false }: {
  plan: LeavePlan;
  compact?: boolean;
}) {
  // horizontal segments colored by protection: job-protected, pay-only, gap
  return <SegmentTrack segments={plan.segments} compact={compact} />;
}`},{id:"pr-132",name:"citation-chip",category:"App components",version:"2.3.0",origin:"Oneward Core, 2024-Q3",reuse:6,deps:["citation-formatter"],dependents:6,lastModified:"2026-07-27",code:`export function CitationChip({ citation, onOpenSource }: {
  citation: { label: string; sourceId: string; effectiveDate: string };
  onOpenSource: (sourceId: string) => void;
}) {
  return <button onClick={() => onOpenSource(citation.sourceId)}>{citation.label}</button>;
}`},{id:"pr-133",name:"diff-annotator",category:"App components",version:"1.6.0",origin:"Harborview Systems, 2024-Q4",reuse:5,deps:[],dependents:4,lastModified:"2026-06-25",code:`export function DiffAnnotator({ diff, annotations }: {
  diff: { field: string; before: string; after: string }[];
  annotations: Record<string, string>;
}) {
  return <DiffTable rows={diff} notes={annotations} highlight="after" />;
}`},{id:"pr-134",name:"approval-queue-card",category:"App components",version:"1.4.1",origin:"Meridian Group, 2026-Q1",reuse:4,deps:[],dependents:3,lastModified:"2026-06-11",code:`export function ApprovalQueueCard({ approval, onDecide }: {
  approval: ApprovalV2;
  onDecide: (decision: "approved" | "rejected", note?: string) => void;
}) {
  return <Card tone={approval.riskTier} footer={<DecisionBar onDecide={onDecide} />} />;
}`},{id:"pr-135",name:"variance-waterfall",category:"App components",version:"1.3.0",origin:"Harborview Systems, 2024-Q4",reuse:4,deps:["variance-explainer"],dependents:2,lastModified:"2026-05-26",code:`export function VarianceWaterfall({ drivers, total }: {
  drivers: { label: string; amount: number }[];
  total: number;
}) {
  // signed bars from baseline to actual, one bar per driver
  return <Waterfall items={drivers} total={total} />;
}`},{id:"pr-136",name:"eligibility-checklist",category:"App components",version:"1.2.0",origin:"Northline Health, 2025-Q3",reuse:4,deps:["leave-eligibility-evaluator"],dependents:2,lastModified:"2026-05-07",code:`export function EligibilityChecklist({ checks }: {
  checks: { label: string; met: boolean; detail: string }[];
}) {
  return <ul>{checks.map((c) => <CheckRow key={c.label} check={c} />)}</ul>;
}`},{id:"pr-137",name:"run-outcome-badge",category:"App components",version:"1.1.0",origin:"Oneward Core, 2024-Q3",reuse:3,deps:[],dependents:3,lastModified:"2026-04-21",code:`export function RunOutcomeBadge({ outcome }: {
  outcome: "completed" | "pending_approval" | "escalated" | "flagged";
}) {
  return <Badge tone={toneFor(outcome)}>{labelFor(outcome)}</Badge>;
}`},{id:"pr-138",name:"policy-source-drawer",category:"App components",version:"1.2.2",origin:"Meridian Group, 2026-Q1",reuse:3,deps:["policy-passage-retriever"],dependents:2,lastModified:"2026-06-16",code:`export function PolicySourceDrawer({ source, open, onClose }: {
  source: PolicySource;
  open: boolean;
  onClose: () => void;
}) {
  return <Drawer open={open} onClose={onClose} title={source.name} meta={source.version} />;
}`},{id:"pr-139",name:"autonomy-tier-stepper",category:"App components",version:"1.0.2",origin:"Meridian Group, 2026-Q1",reuse:2,deps:[],dependents:1,lastModified:"2026-03-12",code:`export function AutonomyTierStepper({ current, history }: {
  current: AutonomyTier;
  history: TierChange[];
}) {
  return <Stepper steps={TIERS} active={current} annotations={history} />;
}`},{id:"pr-140",name:"policy-pack-paper",category:"App components",version:"1.0.0",origin:"Oneward Core, 2026-Q2",reuse:3,deps:[],dependents:2,lastModified:"2026-07-28",code:`export function PolicyPackPaper({ pack }: { pack: PolicyPack }) {
  // renders sourceText passages on paper: serif measure, citation and effective date in the margin
  return (
    <article className="pack-paper">
      {pack.sourceText.map((p) => (
        <Passage key={p.citation + p.effectiveDate} passage={p} />
      ))}
    </article>
  );
}`},{id:"pr-141",name:"rules-yaml-viewer",category:"App components",version:"1.0.1",origin:"Oneward Core, 2026-Q2",reuse:3,deps:[],dependents:2,lastModified:"2026-07-30",code:`export function RulesYamlViewer({ yaml, highlightKeys }: {
  yaml: string;
  highlightKeys?: string[];
}) {
  // line-numbered YAML with key highlighting; used on every Policy Library pack page
  return <CodeBlock language="yaml" source={yaml} highlight={highlightKeys} />;
}`},{id:"pr-142",name:"coverage-grid",category:"App components",version:"1.0.0",origin:"Meridian Group, 2026-Q2",reuse:2,deps:[],dependents:1,lastModified:"2026-07-19",code:`export function CoverageGrid({ rows }: {
  rows: { state: string; level: "complete" | "partial" | "missing"; note: string }[];
}) {
  // partial and missing render honestly; complete-everywhere reads as fake
  return <Grid rows={rows} tone={levelTone} />;
}`}],M=[{stage:"Engagement",inFlight:6},{stage:"Build",inFlight:11},{stage:"Productize",inFlight:7},{stage:"Library",inFlight:142}];function T(){let{draftAgentCreated:e,setDraftAgentCreated:o}=(0,h.useAppState)(),[a,s]=(0,r.useState)(""),[i,u]=(0,r.useState)(e),x=f.voeDraft.streamedAssembly.length+f.voeDraft.sections.length,{visible:y,done:b,start:v}=(0,g.useStreamedReveal)(x,{auto:!1,min:420,max:860}),[z,k]=(0,r.useState)(!1),w=()=>{a.trim()&&(u(!0),v())},j=e?f.voeDraft.streamedAssembly.length:Math.min(y,f.voeDraft.streamedAssembly.length),S=e?f.voeDraft.sections.length:Math.max(0,y-f.voeDraft.streamedAssembly.length);return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"gridlines surface-2 rounded-lg border p-5",children:[(0,t.jsx)(p.Eyebrow,{brand:!0,className:"mb-2.5",children:"Describe the agent in plain language"}),(0,t.jsxs)("div",{className:"flex items-start gap-2.5",children:[(0,t.jsx)("textarea",{value:a,onChange:e=>s(e.target.value),onKeyDown:e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),w())},rows:2,placeholder:`Try: "${f.voeDraft.prompt}"`,className:"min-h-[58px] flex-1 resize-none rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[13px] leading-relaxed outline-none placeholder:text-muted-foreground/60 focus:border-brand/50"}),(0,t.jsxs)(m.Button,{onClick:w,disabled:!a.trim(),className:"h-[58px]",children:[(0,t.jsx)(d,{className:"size-4"})," Draft the agent"]})]})]}),i&&(0,t.jsxs)("div",{className:"mt-4 grid grid-cols-5 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-2 self-start rounded-lg border bg-card",children:[(0,t.jsx)("div",{className:"border-b px-4 py-2.5",children:(0,t.jsx)(p.Eyebrow,{children:"Assembling from the library"})}),(0,t.jsxs)("div",{className:"divide-y divide-white/[0.05]",children:[f.voeDraft.streamedAssembly.slice(0,j).map(e=>(0,t.jsxs)("div",{className:"animate-step-in flex items-start gap-2.5 px-4 py-2.5",children:[(0,t.jsx)(n.CheckCircle2,{className:"mt-0.5 size-3.5 shrink-0 text-success"}),(0,t.jsxs)("span",{className:"min-w-0 text-[12.5px] leading-snug",children:[e.primitive?(0,t.jsxs)(t.Fragment,{children:[e.text.split(e.primitive)[0],(0,t.jsx)("button",{className:"font-mono font-semibold text-brand hover:underline",onClick:()=>document.querySelector("[data-tab-primitives]")?.dispatchEvent(new Event("click")),children:e.primitive}),e.text.split(e.primitive)[1]??""]}):e.text,e.baseline&&(0,t.jsx)("span",{className:"ml-1.5 inline-flex",children:(0,t.jsx)(p.SourceChip,{chip:{kind:"internal",source:"Meridian internal baseline",method:"Engagement telemetry, trailing 4 quarters"}})})]})]},e.text)),j<f.voeDraft.streamedAssembly.length&&(0,t.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2.5 text-[11.5px] text-muted-foreground",children:[(0,t.jsx)("span",{className:"size-1.5 animate-ping rounded-full bg-brand"})," assembling"]})]})]}),(0,t.jsxs)("div",{className:"col-span-3 self-start rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b px-4 py-2.5",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)(p.Eyebrow,{children:["Draft · ",f.voeDraft.name]}),(0,t.jsx)(p.TierBadge,{tier:"Draft"})]}),(0,t.jsxs)("span",{className:"font-mono text-[10px] text-muted-foreground",children:["owner: ",f.voeDraft.owner]})]}),(0,t.jsx)("div",{className:"divide-y divide-white/[0.05]",children:f.voeDraft.sections.slice(0,S).map(e=>(0,t.jsxs)("div",{className:"animate-step-in px-4 py-3",children:[(0,t.jsx)("div",{className:"text-[12.5px] font-bold",children:e.title}),(0,t.jsx)("p",{className:"mt-0.5 text-[12px] leading-relaxed text-muted-foreground",children:e.body})]},e.title))}),(b||e)&&!z&&(0,t.jsxs)("div",{className:"flex items-center justify-between border-t px-4 py-3",children:[(0,t.jsx)("span",{className:"text-[12px] text-muted-foreground",children:"Every write stays behind Approvals; the starter suite gates any tier change."}),(0,t.jsxs)(m.Button,{size:"sm",onClick:()=>{k(!0),o(!0),l.toast.success("Employment Verification Agent deployed as v1",{description:"Draft tier · 12-scenario starter suite attached · visible in Agents pending its first regression run."})},children:[(0,t.jsx)(c,{className:"size-3.5"})," Deploy as v1"]})]}),z&&(0,t.jsxs)("div",{className:"flex items-center gap-2 border-t px-4 py-3 text-[12.5px] font-semibold text-success",children:[(0,t.jsx)(n.CheckCircle2,{className:"size-4"})," Deployed as v1 at Draft tier. Under two minutes from sentence to governed agent."]})]})]})]})}function A(){let[e,o]=(0,r.useState)(C[1].name),[n,a]=(0,r.useState)(!1),s=C.find(t=>t.name===e);return(0,t.jsxs)("div",{className:"mt-4 grid grid-cols-7 gap-4",children:[(0,t.jsxs)("div",{className:"col-span-2 space-y-4 self-start",children:[(0,t.jsxs)("div",{className:"overflow-hidden rounded-lg border bg-card",children:[(0,t.jsx)("div",{className:"border-b px-3.5 py-2",children:(0,t.jsx)(p.Eyebrow,{children:"Unified objects"})}),(0,t.jsx)("div",{className:"divide-y divide-white/[0.05]",children:C.map(r=>(0,t.jsxs)("button",{onClick:()=>o(r.name),className:(0,k.cn)("flex w-full items-center justify-between px-3.5 py-2 text-left transition-colors hover:bg-white/[0.03]",e===r.name&&"bg-white/[0.05]"),children:[(0,t.jsx)("span",{className:"text-[12.5px] font-semibold",children:r.name}),(0,t.jsx)("span",{className:(0,k.cn)("rounded border px-1 font-mono text-[8.5px] font-bold uppercase","writes"===r.oneward?"border-amber/35 text-amber":"masters"===r.oneward?"border-brand/40 text-brand":"border-white/12 text-muted-foreground"),children:r.oneward})]},r.name))})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card p-4",children:[(0,t.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,t.jsx)(p.Eyebrow,{children:"Object mastery"}),(0,t.jsx)("button",{onClick:()=>a(e=>!e),className:(0,k.cn)("rounded border px-2 py-1 text-[10.5px] font-semibold transition-colors",n?"border-brand/40 bg-brand/[0.08] text-brand":"text-muted-foreground hover:text-foreground"),children:n?"Projected: after HRIS renewal":"Current state"})]}),(0,t.jsx)("div",{className:"space-y-1",children:C.map(e=>(0,t.jsxs)("div",{className:(0,k.cn)("flex items-center justify-between rounded px-2 py-1 text-[11.5px]",n&&e.projectedMaster&&"bg-brand/[0.08] ring-1 ring-inset ring-brand/30"),children:[(0,t.jsx)("span",{className:"font-medium",children:e.name}),(0,t.jsx)("span",{className:(0,k.cn)("font-mono text-[9.5px]",n&&e.projectedMaster?"font-bold text-brand":"text-muted-foreground"),children:n&&e.projectedMaster?"Oneward masters":e.masteredBy.split("·")[0].trim()})]},e.name))}),(0,t.jsxs)("div",{className:"mt-3 border-t pt-2.5",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-1 !text-[8.5px]",children:"Oneward already masters"}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1",children:I.map(e=>(0,t.jsx)("span",{className:"rounded border border-brand/25 bg-brand/[0.05] px-1.5 py-0.5 font-mono text-[9px] text-brand",children:e},e))})]}),(0,t.jsx)("p",{className:"mt-2.5 text-[10.5px] leading-relaxed text-muted-foreground",children:"Current state: the systems of record master their objects; Oneward reads, writes through their business processes, and masters the agent layer. The projected-state toggle shows which objects would move to Oneward mastery after an HRIS renewal decision."})]})]}),(0,t.jsxs)("div",{className:"col-span-5 self-start rounded-lg border bg-card",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between border-b px-4 py-2.5",children:[(0,t.jsxs)(p.Eyebrow,{children:[s.name," · field-level mapping across the dual HCM"]}),(0,t.jsxs)("span",{className:"font-mono text-[10px] text-muted-foreground",children:["mastered by ",s.masteredBy]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-[150px_1fr_1fr] gap-0 border-b px-4 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",children:[(0,t.jsx)("span",{children:"Unified field"}),(0,t.jsx)("span",{children:"Workday (Meridian)"}),(0,t.jsx)("span",{children:"SuccessFactors (Lakeshore)"})]}),(0,t.jsx)("div",{className:"divide-y divide-white/[0.05]",children:s.fields.map(e=>(0,t.jsxs)("div",{className:(0,k.cn)("px-4 py-2.5",e.conflict&&"bg-amber/[0.03]"),children:[(0,t.jsxs)("div",{className:"grid grid-cols-[150px_1fr_1fr] items-baseline gap-0",children:[(0,t.jsx)("span",{className:"font-mono text-[11.5px] font-bold text-brand",children:e.unified}),(0,t.jsx)("span",{className:(0,k.cn)("pr-3 font-mono text-[10.5px] leading-snug",e.workday?"text-foreground/85":"text-muted-foreground/50"),children:e.workday??"unmapped"}),(0,t.jsx)("span",{className:(0,k.cn)("font-mono text-[10.5px] leading-snug",e.sf?"text-foreground/85":"text-muted-foreground/50"),children:e.sf??"unmapped"})]}),e.conflict&&(0,t.jsxs)("p",{className:"mt-1.5 text-[11px] leading-snug text-amber",children:["Conflict: ",e.conflict]})]},e.unified))}),s.unmappedNote&&(0,t.jsx)("p",{className:"px-4 py-2.5 text-[11px] text-muted-foreground",children:s.unmappedNote})]})]})}let P=["All","Connectors","Agent tools","Workflow templates","Permission patterns","App components"];function D(){let[e,o]=(0,r.useState)("All"),[n,i]=(0,r.useState)(null),c=(0,r.useMemo)(()=>"All"===e?N:N.filter(t=>t.category===e),[e]);return(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-4 gap-3",children:[(0,t.jsxs)("div",{className:"rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-1.5",children:"Primitives"}),(0,t.jsx)("span",{className:"text-[24px] font-bold tabular-nums",children:142}),(0,t.jsxs)("span",{className:"ml-2 text-[11px] text-muted-foreground",children:[62,"% reused in 2+ deployments"]})]}),(0,t.jsxs)("div",{className:"rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-1.5",children:"Time to deploy a new agent"}),(0,t.jsxs)("span",{className:"text-[24px] font-bold tabular-nums",children:[9,"d"]}),(0,t.jsxs)("span",{className:"ml-2 text-[11px] text-muted-foreground",children:["from library vs ",34,"d from scratch"]}),(0,t.jsx)("div",{className:"mt-1",children:(0,t.jsx)(p.SourceChip,{chip:{kind:"internal",source:"Meridian internal baseline",method:"Meridian internal baseline, engagement telemetry, trailing 4 quarters. Policy packs promoted to the Policy Library; the 142 counted here are code and configuration primitives only."}})})]}),(0,t.jsxs)("div",{className:"col-span-2 rounded-lg border bg-card px-4 py-3",children:[(0,t.jsx)(p.Eyebrow,{className:"mb-2",children:"Flywheel"}),(0,t.jsx)("div",{className:"flex items-center gap-2",children:M.map((e,r)=>(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("span",{className:"rounded border bg-white/[0.03] px-2.5 py-1.5 text-[11px]",children:[(0,t.jsx)("span",{className:"font-semibold",children:e.stage}),(0,t.jsx)("span",{className:"ml-1.5 font-mono text-[10px] text-brand",children:e.inFlight})]}),r<M.length-1&&(0,t.jsx)(s.ChevronRight,{className:"size-3 text-muted-foreground/50"})]},e.stage))})]})]}),(0,t.jsx)("div",{className:"mt-3 flex items-center gap-1.5",children:P.map(r=>(0,t.jsxs)("button",{onClick:()=>o(r),className:(0,k.cn)("rounded border px-2 py-1 text-[11px] font-semibold transition-colors",e===r?"border-brand/40 bg-brand/[0.07] text-brand":"bg-card text-muted-foreground hover:text-foreground"),children:[r,(0,t.jsx)("span",{className:"ml-1 font-mono text-[9px] opacity-60",children:"All"===r?N.length:N.filter(e=>e.category===r).length})]},r))}),(0,t.jsx)("div",{className:"mt-3 overflow-hidden rounded-lg border bg-card",children:(0,t.jsx)("div",{className:"thin-scroll max-h-[460px] divide-y divide-white/[0.05] overflow-y-auto",children:c.map(e=>(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:()=>i(n===e.id?null:e.id),className:"flex h-9 w-full items-center gap-3 px-4 text-left transition-colors hover:bg-white/[0.03]",children:[n===e.id?(0,t.jsx)(a.ChevronDown,{className:"size-3 shrink-0 text-muted-foreground"}):(0,t.jsx)(s.ChevronRight,{className:"size-3 shrink-0 text-muted-foreground/50"}),(0,t.jsx)("span",{className:"w-64 shrink-0 truncate font-mono text-[11.5px] font-semibold",children:e.name}),(0,t.jsx)("span",{className:"w-36 shrink-0 text-[10.5px] text-muted-foreground",children:e.category}),(0,t.jsxs)("span",{className:"w-14 shrink-0 font-mono text-[10px] text-muted-foreground",children:["v",e.version]}),(0,t.jsxs)("span",{className:"min-w-0 flex-1 truncate text-[10.5px] text-muted-foreground",children:["Origin: ",e.origin]}),(0,t.jsxs)("span",{className:"w-20 shrink-0 text-right font-mono text-[10px]",children:["reuse ",e.reuse]}),(0,t.jsx)("span",{className:"w-24 shrink-0 text-right font-mono text-[10px] text-muted-foreground",children:e.lastModified})]}),n===e.id&&(0,t.jsxs)("div",{className:"border-t border-white/[0.04] bg-white/[0.015] px-4 py-3 pl-[46px]",children:[(0,t.jsxs)("div",{className:"mb-2 flex flex-wrap gap-3 text-[10.5px] text-muted-foreground",children:[(0,t.jsxs)("span",{children:["deps: ",e.deps.length?e.deps.join(", "):"none"]}),(0,t.jsxs)("span",{children:["dependents: ",e.dependents]})]}),(0,t.jsx)("pre",{className:"console-pane thin-scroll overflow-x-auto rounded-md px-3 py-2.5 text-[10.5px] leading-relaxed",children:e.code})]})]},e.id))})})]})}function E(){let e=(0,o.useSearchParams)(),n=e.get("tab"),a=e=>"policy-sources"===e?"policy-library":e,[s,i]=(0,r.useState)(a(n)??"agents"),c=e.get("pack")??e.get("source"),d=a(e.get("tab")),[l,m]=(0,r.useState)(d);return d!==l&&(m(d),d&&i(d)),(0,t.jsxs)("div",{children:[(0,t.jsx)(p.PageHeader,{eyebrow:"Build",title:"The developer surface",description:"Agents assemble from library primitives. Policies, objects, and mappings are product artifacts, not configuration lore."}),(0,t.jsxs)(u.Tabs,{value:s,onValueChange:e=>i(e),children:[(0,t.jsxs)(u.TabsList,{children:[(0,t.jsx)(u.TabsTrigger,{value:"agents",children:"Agents"}),(0,t.jsx)(u.TabsTrigger,{value:"primitives",children:"Primitives"}),(0,t.jsx)(u.TabsTrigger,{value:"objects",children:"Objects"}),(0,t.jsx)(u.TabsTrigger,{value:"policy-library",children:"Policy Library"})]}),(0,t.jsx)(u.TabsContent,{value:"agents",children:(0,t.jsx)(T,{})}),(0,t.jsx)(u.TabsContent,{value:"primitives",children:(0,t.jsx)(D,{})}),(0,t.jsx)(u.TabsContent,{value:"objects",children:(0,t.jsx)(A,{})}),(0,t.jsx)(u.TabsContent,{value:"policy-library",children:(0,t.jsx)(S,{highlight:c})})]})]})}e.s(["default",0,function(){return(0,t.jsx)(r.Suspense,{children:(0,t.jsx)(E,{})})}],17344)}]);