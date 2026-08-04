(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29338,e=>{"use strict";var a=e.i(16592),t=e.i(47926);let i=e=>String(e).padStart(2,"0"),r=["2025-08","2025-09","2025-10","2025-11","2025-12","2026-01","2026-02","2026-03","2026-04","2026-05","2026-06","2026-07"],n=e=>`${r[5*e%12]}-${i(1+3*e%27)}`,o=["2026-08-15","2026-09-01","2026-09-15","2026-10-01","2026-10-15"],s=["2024-11-04","2025-01-20","2025-03-03","2025-05-12"],d=0;function l(e){let a=d++;return{lastScanned:`2026-07-${i(12+a%20)} 02:00`,lastContentUpdate:n(a),nextReview:o[a%5],versionHistory:[{version:"1.1",date:n(a),note:"Parameter refresh from monitored agency source"},{version:"1.0",date:s[a%4],note:"Initial ingestion"}],...e}}let c=[["AL","Alabama","Alabama Department of Labor","labor.alabama.gov"],["AK","Alaska","Alaska Department of Labor and Workforce Development","labor.alaska.gov"],["AZ","Arizona","Industrial Commission of Arizona","azica.gov"],["AR","Arkansas","Arkansas Department of Labor and Licensing","labor.arkansas.gov"],["CA","California","California DIR, Labor Commissioner (DLSE)","dir.ca.gov"],["CO","Colorado","Colorado Department of Labor and Employment","cdle.colorado.gov"],["CT","Connecticut","Connecticut Department of Labor","ctdol.state.ct.us"],["DE","Delaware","Delaware Department of Labor","labor.delaware.gov"],["FL","Florida","Florida Department of Commerce","floridajobs.org"],["GA","Georgia","Georgia Department of Labor","dol.georgia.gov"],["HI","Hawaii","Hawaii Department of Labor and Industrial Relations","labor.hawaii.gov"],["ID","Idaho","Idaho Department of Labor","labor.idaho.gov"],["IL","Illinois","Illinois Department of Labor","labor.illinois.gov"],["IN","Indiana","Indiana Department of Labor","in.gov/dol"],["IA","Iowa","Iowa Division of Labor","iowadivisionoflabor.gov"],["KS","Kansas","Kansas Department of Labor","dol.ks.gov"],["KY","Kentucky","Kentucky Education and Labor Cabinet","labor.ky.gov"],["LA","Louisiana","Louisiana Workforce Commission","laworks.net"],["ME","Maine","Maine Department of Labor","maine.gov/labor"],["MD","Maryland","Maryland Department of Labor","labor.maryland.gov"],["MA","Massachusetts","Massachusetts Department of Labor Standards","mass.gov"],["MI","Michigan","Michigan Department of Labor and Economic Opportunity","michigan.gov/leo"],["MN","Minnesota","Minnesota Department of Labor and Industry","dli.mn.gov"],["MS","Mississippi","Mississippi Department of Employment Security","mdes.ms.gov"],["MO","Missouri","Missouri Department of Labor and Industrial Relations","labor.mo.gov"],["MT","Montana","Montana Department of Labor and Industry","dli.mt.gov"],["NE","Nebraska","Nebraska Department of Labor","dol.nebraska.gov"],["NV","Nevada","Office of the Nevada Labor Commissioner","labor.nv.gov"],["NH","New Hampshire","New Hampshire Department of Labor","nh.gov/labor"],["NJ","New Jersey","New Jersey Department of Labor and Workforce Development","nj.gov/labor"],["NM","New Mexico","New Mexico Department of Workforce Solutions","dws.state.nm.us"],["NY","New York","New York State Department of Labor","dol.ny.gov"],["NC","North Carolina","North Carolina Department of Labor","labor.nc.gov"],["ND","North Dakota","North Dakota Department of Labor and Human Rights","nd.gov/labor"],["OH","Ohio","Ohio Department of Commerce, Bureau of Wage and Hour","com.ohio.gov"],["OK","Oklahoma","Oklahoma Department of Labor","oklahoma.gov/odol"],["OR","Oregon","Oregon Bureau of Labor and Industries","oregon.gov/boli"],["PA","Pennsylvania","Pennsylvania Department of Labor and Industry","dli.pa.gov"],["RI","Rhode Island","Rhode Island Department of Labor and Training","dlt.ri.gov"],["SC","South Carolina","South Carolina Department of Labor, Licensing and Regulation","llr.sc.gov"],["SD","South Dakota","South Dakota Department of Labor and Regulation","dlr.sd.gov"],["TN","Tennessee","Tennessee Department of Labor and Workforce Development","tn.gov/workforce"],["TX","Texas","Texas Workforce Commission","twc.texas.gov"],["UT","Utah","Utah Labor Commission","laborcommission.utah.gov"],["VT","Vermont","Vermont Department of Labor","labor.vermont.gov"],["VA","Virginia","Virginia Department of Labor and Industry","doli.virginia.gov"],["WA","Washington","Washington Department of Labor and Industries","lni.wa.gov"],["WV","West Virginia","West Virginia Division of Labor","labor.wv.gov"],["WI","Wisconsin","Wisconsin Department of Workforce Development","dwd.wisconsin.gov"],["WY","Wyoming","Wyoming Department of Workforce Services","wyomingworkforce.org"]],p=e=>e.split("_").join(" "),u=`pack: ca-leave-pack
jurisdiction: US-CA
domain: leave
programs: [pdl, cfra, sdi, pfl]
rules:
  pdl_weeks_max: 17.3
  cfra_weeks: 12
  cfra_employer_threshold: 5
  fmla_concurrent_with_pdl: true
  cfra_concurrent_with_pdl: false
  sdi_waiting_days: 7
  pfl_waiting_days: 0
  pfl_bonding_weeks: 8
sources:
  - id: ca-crd-pdl-guidance
    retrieved: 2026-07-15
  - id: ca-edd-sdi-faq
    retrieved: 2026-07-15
last_scanned: 2026-07-29T02:00:00Z
last_content_update: 2026-01-01
next_review: 2026-10-01`,m=[l({id:"ps-fmla",name:"FMLA: Family and Medical Leave Act",category:"Federal",jurisdiction:"Federal",domain:"leave",status:"current",programs:["fmla"],rulesYaml:`pack: us-fmla
jurisdiction: US-Federal
domain: leave
rules:
  entitlement_weeks: 12
  military_caregiver_weeks: 26
  lookback_hours: 1250
  lookback_months: 12
  employer_threshold: 50_employees_within_75_miles
  runs_concurrent_with_state_disability: true
sources:
  - id: dol-whd-fmla
    retrieved: 2026-07-28`,sources:[{id:"dol-whd-fmla",label:"US DOL Wage and Hour Division",url:"https://dol.gov/agencies/whd/fmla",retrieved:"2026-07-28"},{id:"ecfr-825",label:"eCFR, 29 CFR Part 825",url:"https://ecfr.gov/current/title-29/part-825",retrieved:"2026-07-28"}],sourceText:[{text:"An eligible employee is entitled to a total of 12 workweeks of leave during any 12-month period for a serious health condition that makes the employee unable to perform the functions of the position.",citation:"FMLA, 29 CFR Part 825",effectiveDate:"current regs"},{text:"An eligible employee is entitled to a total of 12 workweeks of leave during any 12-month period for the birth of a child and to care for the newborn child.",citation:"FMLA, 29 CFR Part 825",effectiveDate:"current regs"},{text:"To be eligible, an employee must have been employed for at least 12 months, have at least 1,250 hours of service during the 12-month period immediately preceding the leave, and work at a site where the employer employs 50 or more employees within 75 miles.",citation:"29 CFR 825.110",effectiveDate:"current regs"}],lastScanned:"2026-07-28 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",versionHistory:[{version:"3.0",date:"2026-01-01",note:"Annual regulation re-crawl, no substantive change"},{version:"2.4",date:"2025-04-10",note:"Military caregiver leave clarifications"},{version:"1.0",date:"2024-09-02",note:"Initial ingestion"}],dependents:{agents:["ag-leave","ag-helpdesk","ag-offboarding","ag-manager"],evalHint:"es-leave: federal baseline referenced across all 412 scenarios"}}),l({id:"ps-cobra",name:"COBRA notice timing (plan administrator)",category:"Federal",jurisdiction:"Federal",domain:"benefits",status:"current",rulesYaml:`pack: us-cobra-notice-timing
jurisdiction: US-Federal
domain: benefits
rules:
  employer_notify_plan_days: 30
  election_notice_days: 14
  election_window_days: 60
  premium_grace_days: 30
  state_mini_cobra: overlay_by_state
sources:
  - id: dol-ebsa-cobra
    retrieved: 2026-07-18`,sources:[{id:"dol-ebsa-cobra",label:"US DOL EBSA model notices",url:"https://dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra",retrieved:"2026-07-18"}],sourceText:[{text:"The plan administrator must provide the election notice within 14 days of receiving notice of a qualifying event; the employer must notify the plan administrator within 30 days of the event.",citation:"COBRA notice timing (plan administrator)",effectiveDate:"Current"},{text:"Qualified beneficiaries have 60 days from the later of the notice date or the loss of coverage to elect continuation coverage.",citation:"COBRA notice timing (plan administrator)",effectiveDate:"Current"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2026-01-05",nextReview:"2026-10-01",dependents:{agents:["ag-offboarding"],evalHint:"es-offboarding: COBRA timing scenarios"}}),l({id:"ps-wage-hour",name:"Wage-hour corpus: multi-state withholding, SUI, reciprocity, FLSA OT incl. CA daily OT, remote-worker nexus",category:"Federal",jurisdiction:"Multi-state",domain:"wage-hour",status:"current",rulesYaml:`pack: wage-hour-corpus
jurisdiction: US-Federal_plus_state_overlays
domain: wage-hour
rules:
  overtime_threshold_hours: 40
  daily_overtime_states: [CA, AK, NV, CO]
  regular_rate: includes_nondiscretionary_bonus
  withholding_follows: work_state_from_effective_date
  reciprocity: listed_state_pairs_only
  remote_worker_nexus: work_state_controls_sui
sources:
  - id: dol-whd-flsa
    retrieved: 2026-07-29
  - id: state-agency-set
    retrieved: 2026-07-29`,sources:[{id:"dol-whd-flsa",label:"US DOL Wage and Hour Division",url:"https://dol.gov/agencies/whd/flsa",retrieved:"2026-07-29"},{id:"state-agency-set",label:"State agency corpus (per-state entries)",url:"https://dir.ca.gov",retrieved:"2026-07-29"}],sourceText:[{text:"When an employee's work state changes, employer withholding and state unemployment insurance registration must reflect the new work state from the effective date of the change; reciprocity agreements apply only between listed states.",citation:"Wage-hour corpus: multi-state withholding and SUI",effectiveDate:"Rolling, refreshed Jul 29, 2026"},{text:"Under the FLSA, non-exempt employees must receive overtime at one and one half times the regular rate for hours worked over 40 in a workweek; California, Alaska, Nevada, and Colorado layer daily overtime thresholds on top.",citation:"Wage-hour corpus: FLSA OT with state overlays",effectiveDate:"Rolling, refreshed Jul 29, 2026"}],lastScanned:"2026-07-29 02:00",lastContentUpdate:"2026-07-01",nextReview:"2026-08-15",dependents:{agents:["ag-payroll-audit"],evalHint:"es-payroll: withholding and SUI mismatch scenarios cite this corpus"}}),l({id:"pk-fed-flsa",name:"FLSA minimum wage and overtime (29 USC 201)",category:"Federal",jurisdiction:"Federal",domain:"wage-hour",status:"current",rulesYaml:`pack: us-flsa-core
jurisdiction: US-Federal
domain: wage-hour
rules:
  federal_min_wage: 7.25
  overtime_threshold_hours: 40
  overtime_multiplier: 1.5
  regular_rate: includes_nondiscretionary_bonus
  tip_credit_max: 5.12
sources:
  - id: dol-whd-flsa-core
    retrieved: 2026-07-21`,sources:[{id:"dol-whd-flsa-core",label:"US DOL Wage and Hour Division",url:"https://dol.gov/agencies/whd/flsa",retrieved:"2026-07-21"}],sourceText:[{text:"Covered nonexempt workers are entitled to a minimum wage of not less than 7.25 dollars per hour and overtime pay at a rate not less than one and one half times the regular rate after 40 hours of work in a workweek.",citation:"US DOL Wage and Hour Division",effectiveDate:"Jul 24, 2009"}],dependents:{agents:["ag-payroll-audit"],evalHint:"es-payroll: OT baseline checks"}}),l({id:"pk-fed-flsa-exempt",name:"FLSA white collar exemptions (29 CFR Part 541)",category:"Federal",jurisdiction:"Federal",domain:"wage-hour",status:"current",rulesYaml:`pack: us-flsa-exemptions
jurisdiction: US-Federal
domain: wage-hour
rules:
  salary_basis_weekly_min: 684
  duties_tests: [executive, administrative, professional]
  hce_annual_threshold: 107432
  note: 2024_threshold_rule_vacated_Nov_2024
sources:
  - id: dol-whd-541
    retrieved: 2026-07-21`,sources:[{id:"dol-whd-541",label:"US DOL Wage and Hour Division",url:"https://dol.gov/agencies/whd/overtime",retrieved:"2026-07-21"}],sourceText:[{text:"To qualify for the executive, administrative, or professional exemption, an employee must be paid on a salary basis of not less than 684 dollars per week and meet the applicable duties test.",citation:"US DOL Wage and Hour Division",effectiveDate:"Jan 1, 2020 (2024 rule vacated)"}],dependents:{agents:["ag-payroll-audit","ag-comp"],evalHint:"es-payroll: exemption classification checks"}}),l({id:"pk-fed-userra",name:"USERRA military leave and reemployment",category:"Federal",jurisdiction:"Federal",domain:"leave",status:"current",rulesYaml:`pack: us-userra
jurisdiction: US-Federal
domain: leave
rules:
  cumulative_service_cap_years: 5
  reemployment_window: tiered_by_service_length
  benefits_continuation_months: 24
  escalator_position: required
sources:
  - id: dol-vets-userra
    retrieved: 2026-07-16`,sources:[{id:"dol-vets-userra",label:"US DOL VETS",url:"https://dol.gov/agencies/vets/programs/userra",retrieved:"2026-07-16"}],sourceText:[{text:"An employee returning from uniformed service is entitled to reemployment in the position the employee would have attained with reasonable certainty absent the service, subject to a five year cumulative service cap.",citation:"US DOL VETS",effectiveDate:"Current"}],dependents:{agents:["ag-leave"],evalHint:"es-leave: military leave scenarios"}}),l({id:"pk-fed-ada",name:"ADA reasonable accommodation and interactive process",category:"Federal",jurisdiction:"Federal",domain:"leave",status:"current",rulesYaml:`pack: us-ada-accommodation
jurisdiction: US-Federal
domain: leave
rules:
  interactive_process: required_on_notice
  leave_as_accommodation: case_by_case
  undue_hardship: documented_analysis_only
  medical_inquiries: job_related_and_consistent
sources:
  - id: eeoc-ada-guidance
    retrieved: 2026-07-16`,sources:[{id:"eeoc-ada-guidance",label:"EEOC enforcement guidance",url:"https://eeoc.gov/laws/guidance",retrieved:"2026-07-16"}],sourceText:[{text:"When an employee requests an accommodation, the employer must engage in an interactive process to identify an effective reasonable accommodation; leave may itself be a reasonable accommodation absent undue hardship.",citation:"EEOC enforcement guidance",effectiveDate:"Current"}],dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: accommodation flag scenarios never diagnose"}}),l({id:"pk-fed-i9",name:"Form I-9 employment eligibility verification",category:"Federal",jurisdiction:"Federal",domain:"onboarding",status:"current",rulesYaml:`pack: us-i9
jurisdiction: US-Federal
domain: onboarding
rules:
  section1_due: first_day_of_work
  section2_due_business_days: 3
  retention: later_of_3_years_after_hire_or_1_year_after_term
  remote_examination: e_verify_alternative_procedure
sources:
  - id: uscis-i9-central
    retrieved: 2026-07-20`,sources:[{id:"uscis-i9-central",label:"USCIS I-9 Central",url:"https://uscis.gov/i-9-central",retrieved:"2026-07-20"}],sourceText:[{text:"Employees must complete Section 1 no later than the first day of employment; employers must complete Section 2 within three business days of the employee's first day.",citation:"USCIS I-9 Central",effectiveDate:"Aug 1, 2023 edition"}],dependents:{agents:["ag-onboarding"],evalHint:"es-onboarding: I-9 deadline scenarios"}}),l({id:"pk-fed-warn",name:"WARN Act layoff notice",category:"Federal",jurisdiction:"Federal",domain:"final-pay",status:"current",rulesYaml:`pack: us-warn
jurisdiction: US-Federal
domain: final-pay
rules:
  covered_employer_threshold: 100
  notice_days: 60
  plant_closing_threshold: 50_at_single_site
  mass_layoff_threshold: 500_or_33_pct_of_site
  state_mini_warn: overlay_by_state
sources:
  - id: dol-eta-warn
    retrieved: 2026-07-17`,sources:[{id:"dol-eta-warn",label:"US DOL Employment and Training Administration",url:"https://dol.gov/agencies/eta/layoffs/warn",retrieved:"2026-07-17"}],sourceText:[{text:"Employers with 100 or more employees must provide 60 calendar days of written notice before a plant closing or mass layoff; several states layer longer mini-WARN notice periods on top.",citation:"US DOL ETA",effectiveDate:"Current"}],dependents:{agents:["ag-offboarding"],evalHint:"es-offboarding: reduction-in-force notice checks"}}),l({id:"pk-fed-hipaa",name:"HIPAA privacy for group health plan data",category:"Federal",jurisdiction:"Federal",domain:"benefits",status:"current",rulesYaml:`pack: us-hipaa-plan-privacy
jurisdiction: US-Federal
domain: benefits
rules:
  phi_use: plan_administration_only
  minimum_necessary: required
  firewall: plan_vs_employment_decisions
  breach_notification_days: 60
sources:
  - id: hhs-ocr-hipaa
    retrieved: 2026-07-19`,sources:[{id:"hhs-ocr-hipaa",label:"HHS Office for Civil Rights",url:"https://hhs.gov/hipaa",retrieved:"2026-07-19"}],sourceText:[{text:"Protected health information held by a group health plan may be used for plan administration functions only and may not inform employment decisions; uses are limited to the minimum necessary.",citation:"HHS Office for Civil Rights",effectiveDate:"Current"}],dependents:{agents:["ag-helpdesk"],evalHint:"es-helpdesk: benefits answers avoid PHI exposure"}}),l({id:"pk-fed-erisa-spd",name:"ERISA SPD and SMM disclosure timing",category:"Federal",jurisdiction:"Federal",domain:"benefits",status:"current",rulesYaml:`pack: us-erisa-spd
jurisdiction: US-Federal
domain: benefits
rules:
  spd_due_days_new_participant: 90
  spd_refresh_years: 5
  smm_due_days: 210
  material_reduction_smm_days: 60
sources:
  - id: dol-ebsa-erisa
    retrieved: 2026-07-19`,sources:[{id:"dol-ebsa-erisa",label:"US DOL EBSA",url:"https://dol.gov/agencies/ebsa",retrieved:"2026-07-19"}],sourceText:[{text:"A summary plan description must be furnished to new participants within 90 days of coverage; a summary of material modifications is due within 210 days after the end of the plan year in which the change was adopted.",citation:"US DOL EBSA",effectiveDate:"Current"}],dependents:{agents:["ag-helpdesk"],evalHint:"es-helpdesk: SPD citation freshness checks"}}),l({id:"pk-fed-aca",name:"ACA employer shared responsibility",category:"Federal",jurisdiction:"Federal",domain:"benefits",status:"current",rulesYaml:`pack: us-aca-esr
jurisdiction: US-Federal
domain: benefits
rules:
  full_time_hours_week: 30
  measurement_period_months: 12
  stability_period_months: 12
  reporting_forms: [1094-C, 1095-C]
sources:
  - id: irs-aca-esr
    retrieved: 2026-07-22`,sources:[{id:"irs-aca-esr",label:"IRS employer shared responsibility provisions",url:"https://irs.gov/affordable-care-act/employers",retrieved:"2026-07-22"}],sourceText:[{text:"An employee who averages at least 30 hours of service per week during the measurement period must be treated as full time for the corresponding stability period.",citation:"IRS ACA employer provisions",effectiveDate:"Current"}],dependents:{agents:["ag-payroll-audit"],evalHint:"es-payroll: ACA hours aggregation scenarios"}}),l({id:"pk-fed-fcra",name:"FCRA background check disclosures",category:"Federal",jurisdiction:"Federal",domain:"onboarding",status:"current",rulesYaml:`pack: us-fcra
jurisdiction: US-Federal
domain: onboarding
rules:
  standalone_disclosure: required
  written_authorization: required
  pre_adverse_action_notice: required
  wait_before_adverse_action_days: 5
sources:
  - id: cfpb-fcra
    retrieved: 2026-07-20`,sources:[{id:"cfpb-fcra",label:"Consumer Financial Protection Bureau",url:"https://consumerfinance.gov/compliance/fcra",retrieved:"2026-07-20"}],sourceText:[{text:"Before taking adverse action based on a consumer report, the employer must provide the candidate a pre-adverse action notice with a copy of the report and the summary of rights, then allow a reasonable period, commonly five business days, before final action.",citation:"CFPB FCRA guidance",effectiveDate:"Current"}],dependents:{agents:["ag-screener","ag-onboarding"],evalHint:"es-screener: adverse action gate scenarios"}}),l({id:"pk-fed-pump",name:"PUMP Act lactation breaks",category:"Federal",jurisdiction:"Federal",domain:"leave",status:"current",rulesYaml:`pack: us-pump
jurisdiction: US-Federal
domain: leave
rules:
  break_time: reasonable_each_time_needed
  duration_months_after_birth: 12
  space: private_non_bathroom
  small_employer_hardship_threshold: 50
sources:
  - id: dol-whd-pump
    retrieved: 2026-07-16`,sources:[{id:"dol-whd-pump",label:"US DOL Wage and Hour Division",url:"https://dol.gov/agencies/whd/pump-at-work",retrieved:"2026-07-16"}],sourceText:[{text:"Employers must provide reasonable break time and a private, non-bathroom space for nursing employees for one year after the child's birth.",citation:"US DOL Wage and Hour Division",effectiveDate:"Apr 28, 2023"}],dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-helpdesk: return-to-work accommodation answers"}}),l({id:"pk-fed-eeo1",name:"EEO-1 Component 1 reporting",category:"Federal",jurisdiction:"Federal",domain:"transparency",status:"current",rulesYaml:`pack: us-eeo1
jurisdiction: US-Federal
domain: transparency
rules:
  employer_threshold: 100
  federal_contractor_threshold: 50
  filing: annual_component_1
  categories: 10_job_categories
sources:
  - id: eeoc-eeo1
    retrieved: 2026-07-23`,sources:[{id:"eeoc-eeo1",label:"EEOC EEO-1 data collection",url:"https://eeocdata.org/eeo1",retrieved:"2026-07-23"}],sourceText:[{text:"Private employers with 100 or more employees must file the EEO-1 Component 1 report annually, categorizing employees by job category, race or ethnicity, and sex.",citation:"EEOC EEO-1 data collection",effectiveDate:"Current"}],dependents:{agents:["ag-pay-compliance"],evalHint:"es-paycomp: reporting readiness checks"}}),l({id:"pk-fed-irs-pub15",name:"IRS Publication 15 federal withholding",category:"Federal",jurisdiction:"Federal",domain:"wage-hour",status:"current",rulesYaml:`pack: us-irs-pub15
jurisdiction: US-Federal
domain: wage-hour
rules:
  w4_version: 2020_redesign_no_allowances
  deposit_schedules: [monthly, semiweekly]
  next_day_deposit_threshold: 100000
  futa_rate_after_credit: 0.6
sources:
  - id: irs-pub15
    retrieved: 2026-07-22`,sources:[{id:"irs-pub15",label:"IRS Publication 15 (Circular E)",url:"https://irs.gov/publications/p15",retrieved:"2026-07-22"}],sourceText:[{text:"Employers accumulate a 100,000 dollar or more tax liability on any day during a deposit period must deposit the tax by the next business day, regardless of deposit schedule.",citation:"IRS Publication 15",effectiveDate:"2026 edition"}],dependents:{agents:["ag-payroll-audit"],evalHint:"es-payroll: deposit schedule flags"}})],y=[l({id:"ps-ca-leave",name:"California leave pack (PDL, CFRA, SDI, PFL)",category:"State leave",jurisdiction:"California",domain:"leave",status:"current",programs:["pdl","cfra","sdi","pfl"],rulesYaml:u,sources:[{id:"ps-ca-pdl",label:"California CRD PDL guidance",url:"https://calcivilrights.ca.gov/pdl",retrieved:"2026-07-15"},{id:"ps-ca-cfra",label:"California CFRA (CRD)",url:"https://calcivilrights.ca.gov/cfra",retrieved:"2026-07-15"},{id:"ps-ca-sdi",label:"California EDD SDI",url:"https://edd.ca.gov/en/disability",retrieved:"2026-07-15"},{id:"ps-ca-pfl",label:"California EDD PFL",url:"https://edd.ca.gov/en/disability/paid-family-leave",retrieved:"2026-07-15"}],sourceText:[{text:"An employee disabled by pregnancy, childbirth, or a related medical condition is entitled to up to four months (17.3 weeks) of Pregnancy Disability Leave. Cesarean delivery with complications may extend the period of disability certified by the health care provider.",citation:"California CRD PDL guidance",effectiveDate:"Jan 1, 2025"},{text:"CFRA does not cover disability on account of pregnancy, childbirth, or related medical conditions. An employee who has exhausted PDL may take up to 12 workweeks of CFRA leave for bonding. CFRA applies to employers with five or more employees.",citation:"California CFRA (CRD)",effectiveDate:"Jan 1, 2025"},{text:"Disability Insurance provides wage replacement of approximately 70 to 90 percent of wages, subject to a seven-day unpaid waiting period.",citation:"California EDD SDI",effectiveDate:"Jan 1, 2026"},{text:"Paid Family Leave provides up to eight weeks of benefits for bonding with a new child. There is no waiting period for PFL claims.",citation:"California EDD PFL",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-29 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",versionHistory:[{version:"2.6",date:"2026-01-01",note:"2026 SDI and PFL parameters; wage replacement now 70 to 90 percent"},{version:"2.0",date:"2025-01-08",note:"CFRA and PDL 2025 guidance refresh"},{version:"1.0",date:"2024-10-14",note:"Aggregated from the four California program packs"}],dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: the CA complication scenarios sequence against this pack"}}),l({id:"ps-ca-pdl",name:"California CRD PDL guidance",category:"State leave",jurisdiction:"California",domain:"leave",status:"current",programs:["pdl"],rulesYaml:`pack: ca-pdl
jurisdiction: US-CA
domain: leave
rules:
  pdl_weeks_max: 17.3
  trigger: disabled_by_pregnancy_childbirth_or_related
  certification: healthcare_provider
  fmla_concurrent: true
  cfra_concurrent: false
sources:
  - id: ca-crd-pdl-guidance
    retrieved: 2026-07-15`,sources:[{id:"ca-crd-pdl-guidance",label:"California Civil Rights Department",url:"https://calcivilrights.ca.gov/pdl",retrieved:"2026-07-15"}],sourceText:[{text:"An employee disabled by pregnancy, childbirth, or a related medical condition is entitled to up to four months (17.3 weeks) of Pregnancy Disability Leave. Cesarean delivery with complications may extend the period of disability certified by the health care provider.",citation:"California CRD PDL guidance",effectiveDate:"Jan 1, 2025"},{text:"For a normal pregnancy and delivery, the typical period of disability is four weeks before and six weeks after delivery.",citation:"California CRD PDL guidance",effectiveDate:"Jan 1, 2025"},{text:"PDL runs concurrently with FMLA when the employee is eligible for both; it does not reduce the employee's separate CFRA entitlement.",citation:"California CRD PDL guidance",effectiveDate:"Jan 1, 2025"}],lastScanned:"2026-07-30 02:00",lastContentUpdate:"2025-01-02",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: PDL duration and complication scenarios"}}),l({id:"ps-ca-sdi",name:"California EDD SDI",category:"State leave",jurisdiction:"California",domain:"leave",status:"current",programs:["sdi"],rulesYaml:`pack: ca-sdi
jurisdiction: US-CA
domain: leave
rules:
  wage_replacement_pct: 70_to_90
  waiting_days: 7
  max_duration_weeks: 52
  funding: employee_payroll_deduction
sources:
  - id: ca-edd-sdi-faq
    retrieved: 2026-07-15`,sources:[{id:"ca-edd-sdi-faq",label:"California EDD",url:"https://edd.ca.gov/en/disability",retrieved:"2026-07-15"}],sourceText:[{text:"Disability Insurance provides wage replacement of approximately 70 to 90 percent of wages, subject to a seven-day unpaid waiting period.",citation:"California EDD SDI",effectiveDate:"Jan 1, 2026"},{text:"Benefits are payable while the employee remains disabled and certified, up to 52 weeks.",citation:"California EDD SDI",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-30 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: SDI waiting period rendered as a pay gap"}}),l({id:"ps-ca-pfl",name:"California EDD PFL",category:"State leave",jurisdiction:"California",domain:"leave",status:"current",programs:["pfl"],rulesYaml:`pack: ca-pfl
jurisdiction: US-CA
domain: leave
rules:
  bonding_weeks: 8
  waiting_days: 0
  wage_replacement_pct: 70_to_90
  claim_window_months: 12
sources:
  - id: ca-edd-pfl-faq
    retrieved: 2026-07-15`,sources:[{id:"ca-edd-pfl-faq",label:"California EDD",url:"https://edd.ca.gov/en/disability/paid-family-leave",retrieved:"2026-07-15"}],sourceText:[{text:"Paid Family Leave provides up to eight weeks of benefits for bonding with a new child. There is no waiting period for PFL claims.",citation:"California EDD PFL",effectiveDate:"Jan 1, 2026"},{text:"PFL benefits may be claimed within the first 12 months after the child's birth, adoption, or foster care placement.",citation:"California EDD PFL",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-30 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: PFL pays the first 8 bonding weeks"}}),l({id:"ps-ca-cfra",name:"California CFRA (CRD)",category:"State leave",jurisdiction:"California",domain:"leave",status:"current",programs:["cfra"],rulesYaml:`pack: ca-cfra
jurisdiction: US-CA
domain: leave
rules:
  entitlement_weeks: 12
  employer_threshold: 5
  pregnancy_disability_covered: false
  bonding_window_months: 12
  concurrent_with_pdl: false
sources:
  - id: ca-crd-cfra-guidance
    retrieved: 2026-07-15`,sources:[{id:"ca-crd-cfra-guidance",label:"California Civil Rights Department",url:"https://calcivilrights.ca.gov/cfra",retrieved:"2026-07-15"}],sourceText:[{text:"CFRA does not cover disability on account of pregnancy, childbirth, or related medical conditions. An employee who has exhausted PDL may take up to 12 workweeks of CFRA leave for bonding. CFRA applies to employers with five or more employees.",citation:"California CFRA (CRD)",effectiveDate:"Jan 1, 2025"},{text:"CFRA leave for bonding must be completed within 12 months of the child's birth, adoption, or foster placement.",citation:"California CFRA (CRD)",effectiveDate:"Jan 1, 2025"}],lastScanned:"2026-07-30 02:00",lastContentUpdate:"2025-01-02",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: CFRA stacks after PDL, never concurrent"}}),l({id:"ps-ny-pfl",name:"New York PFL",category:"State leave",jurisdiction:"New York",domain:"leave",status:"current",programs:["pfl"],rulesYaml:`pack: ny-pfl
jurisdiction: US-NY
domain: leave
rules:
  entitlement_weeks: 12
  wage_replacement_pct: 67
  weekly_cap_2026: 1228.53
  fmla_concurrent: when_both_apply
sources:
  - id: ny-pfl-rate-notice
    retrieved: 2026-07-14`,sources:[{id:"ny-pfl-rate-notice",label:"New York State Paid Family Leave",url:"https://paidfamilyleave.ny.gov",retrieved:"2026-07-14"}],sourceText:[{text:"Eligible employees may take up to 12 weeks of Paid Family Leave at 67 percent of their average weekly wage, capped at 1,228.53 dollars per week for 2026.",citation:"New York State Paid Family Leave",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: NY parameter scenarios"}}),l({id:"ps-wa-pfml",name:"Washington PFML",category:"State leave",jurisdiction:"Washington",domain:"leave",status:"current",programs:["pfml"],rulesYaml:`pack: wa-pfml
jurisdiction: US-WA
domain: leave
rules:
  medical_weeks: 12
  family_weeks: 12
  combined_cap_weeks: 16
  hours_test: 820_in_qualifying_period
  weekly_cap_2026: 1647
sources:
  - id: wa-esd-pfml
    retrieved: 2026-07-14`,sources:[{id:"wa-esd-pfml",label:"Washington Employment Security Department",url:"https://paidleave.wa.gov",retrieved:"2026-07-14"}],sourceText:[{text:"Eligible employees may receive up to 12 weeks of paid family or medical leave, or up to 16 weeks combined, with a maximum weekly benefit of approximately 1,647 dollars in 2026.",citation:"Washington PFML",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: WA combined cap scenarios"}}),l({id:"ps-co-famli",name:"Colorado FAMLI",category:"State leave",jurisdiction:"Colorado",domain:"leave",status:"current",programs:["famli"],rulesYaml:`pack: co-famli
jurisdiction: US-CO
domain: leave
rules:
  entitlement_weeks: 12
  pregnancy_complication_bonus_weeks: 4
  job_protection_tenure_days: 180
  funding: shared_premium
sources:
  - id: co-famli-division
    retrieved: 2026-07-14`,sources:[{id:"co-famli-division",label:"Colorado FAMLI Division",url:"https://famli.colorado.gov",retrieved:"2026-07-14"}],sourceText:[{text:"Colorado FAMLI provides up to 12 weeks of paid family and medical leave benefits per application year.",citation:"Colorado FAMLI",effectiveDate:"Jan 1, 2026"},{text:"An additional four weeks is available for pregnancy or childbirth complications.",citation:"Colorado FAMLI",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-01",dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-helpdesk: the CO parental leave answer cites this pack"}}),l({id:"ps-nj-fli",name:"New Jersey Family Leave Insurance",category:"State leave",jurisdiction:"New Jersey",domain:"leave",status:"current",programs:["fli"],rulesYaml:`pack: nj-fli
jurisdiction: US-NJ
domain: leave
rules:
  entitlement_weeks: 12
  intermittent_days: 56
  wage_replacement_pct: 85
sources:
  - id: nj-dol-fli
    retrieved: 2026-07-14`,sources:[{id:"nj-dol-fli",label:"New Jersey Department of Labor and Workforce Development",url:"https://nj.gov/labor",retrieved:"2026-07-14"}],sourceText:[{text:"Family Leave Insurance provides up to 12 consecutive weeks of cash benefits, or 56 intermittent days, at approximately 85 percent of the average weekly wage.",citation:"New Jersey FLI",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-leave"],evalHint:"es-leave: NJ parameter scenarios"}}),l({id:"ps-ct-pfml",name:"Connecticut Paid Leave",category:"State leave",jurisdiction:"Connecticut",domain:"leave",status:"current",programs:["ctpl"],rulesYaml:`pack: ct-paid-leave
jurisdiction: US-CT
domain: leave
rules:
  entitlement_weeks: 12
  pregnancy_incapacity_bonus_weeks: 2
  weekly_cap: 60x_state_minimum_wage
sources:
  - id: ct-paid-leave-authority
    retrieved: 2026-07-14`,sources:[{id:"ct-paid-leave-authority",label:"Connecticut Paid Leave Authority",url:"https://ctpaidleave.org",retrieved:"2026-07-14"}],sourceText:[{text:"Connecticut Paid Leave provides up to 12 weeks of benefits, with the weekly benefit capped at 60 times the state minimum wage.",citation:"Connecticut Paid Leave Authority",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-leave"],evalHint:"es-leave: CT cap arithmetic scenarios"}}),l({id:"ps-mn-de",name:"Minnesota and Delaware paid leave programs",category:"State leave",jurisdiction:"Minnesota, Delaware",domain:"leave",status:"current",programs:["mn-paid-leave","de-pfml"],rulesYaml:`pack: mn-de-paid-leave
jurisdiction: US-MN_US-DE
domain: leave
rules:
  mn_medical_weeks: 12
  mn_family_weeks: 12
  mn_combined_cap_weeks: 20
  de_parental_weeks: 12
  de_medical_weeks: 6
  benefits_begin: 2026-01-01
sources:
  - id: mn-paid-leave-division
    retrieved: 2026-07-14
  - id: de-dol-pfml
    retrieved: 2026-07-14`,sources:[{id:"mn-paid-leave-division",label:"Minnesota Paid Leave Division",url:"https://paidleave.mn.gov",retrieved:"2026-07-14"},{id:"de-dol-pfml",label:"Delaware Department of Labor",url:"https://labor.delaware.gov",retrieved:"2026-07-14"}],sourceText:[{text:"Minnesota Paid Leave and Delaware Paid Family and Medical Leave both began paying benefits January 1, 2026. Minnesota provides up to 12 medical and 12 family weeks, capped at 20 combined; Delaware provides up to 12 parental weeks.",citation:"Minnesota Paid Leave Division; Delaware DOL",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-26 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-leave"],evalHint:"es-leave: new-program scenarios added for 2026"}})],_=[{id:"pk-lv-ma",state:"Massachusetts",name:"Massachusetts PFML",program:"ma-pfml",agency:"Massachusetts Department of Family and Medical Leave",site:"mass.gov",effective:"Jan 1, 2026 parameters",rules:`  medical_weeks: 20
  family_weeks: 12
  combined_cap_weeks: 26
  private_plan_exemption: allowed`,excerpt:"Covered individuals may take up to 20 weeks of medical leave and 12 weeks of family leave, capped at 26 weeks combined per benefit year."},{id:"pk-lv-or",state:"Oregon",name:"Paid Leave Oregon",program:"or-paid-leave",agency:"Oregon Employment Department",site:"paidleave.oregon.gov",effective:"Jan 1, 2026 parameters",rules:`  entitlement_weeks: 12
  pregnancy_bonus_weeks: 2
  job_protection_tenure_days: 90
  wages_test: 1000_in_base_year`,excerpt:"Employees may take up to 12 weeks of paid leave, with 2 additional weeks for limitations related to pregnancy; job protection applies after 90 days of tenure."},{id:"pk-lv-ri",state:"Rhode Island",name:"Rhode Island TDI and TCI",program:"ri-tdi-tci",agency:"Rhode Island Department of Labor and Training",site:"dlt.ri.gov",effective:"Jan 1, 2026 parameters",rules:`  tdi_weeks_max: 30
  tci_weeks: 7
  waiting_period: none
  funding: employee_payroll_deduction`,excerpt:"Temporary Disability Insurance pays up to 30 weeks for the employee's own disability; Temporary Caregiver Insurance pays up to 7 weeks for bonding or caregiving."},{id:"pk-lv-hi",state:"Hawaii",name:"Hawaii TDI",program:"hi-tdi",agency:"Hawaii Department of Labor and Industrial Relations",site:"labor.hawaii.gov",effective:"Current",rules:`  entitlement_weeks: 26
  wage_replacement_pct: 58
  waiting_days: 7
  employer_plan: statutory_or_equivalent`,excerpt:"Temporary Disability Insurance provides up to 26 weeks of partial wage replacement at 58 percent of average weekly wages after a seven-day waiting period."},{id:"pk-lv-md",state:"Maryland",name:"Maryland FAMLI",program:"md-famli",agency:"Maryland Department of Labor",site:"paidleave.maryland.gov",effective:"Benefits begin Jan 1, 2028 (delayed)",status:"pending",rules:`  entitlement_weeks: 12
  combined_parental_medical_weeks: 24
  contributions_begin: 2027-01-01
  benefits_begin: 2028-01-01`,excerpt:"Following the 2025 delay legislation, FAMLI contributions begin January 1, 2027 and benefits begin January 1, 2028; the program will provide up to 12 weeks, or 24 in combined parental and medical cases."},{id:"pk-lv-dc",state:"District of Columbia",name:"DC Paid Family Leave",program:"dc-pfl",agency:"DC Department of Employment Services",site:"does.dc.gov",effective:"Current",rules:`  parental_weeks: 12
  family_weeks: 12
  medical_weeks: 12
  prenatal_weeks: 2`,excerpt:"The District's Universal Paid Leave program provides up to 12 weeks of parental, family, or medical leave and up to 2 weeks of prenatal leave per year."},{id:"pk-lv-me",state:"Maine",name:"Maine PFML",program:"me-pfml",agency:"Maine Department of Labor",site:"maine.gov/labor",effective:"Benefits began May 1, 2026",rules:`  entitlement_weeks: 12
  benefits_began: 2026-05-01
  wage_replacement: 90_pct_up_to_half_saww
  private_plan_exemption: allowed`,excerpt:"Maine's Paid Family and Medical Leave program began paying benefits May 1, 2026, providing up to 12 weeks per benefit year."},{id:"pk-lv-il",state:"Illinois",name:"Illinois Paid Leave for All Workers",program:"il-plawa",agency:"Illinois Department of Labor",site:"labor.illinois.gov",effective:"Jan 1, 2024",rules:`  paid_leave_hours_per_year: 40
  accrual: 1_hour_per_40_worked
  any_reason: true
  chicago_cook_ordinances: layered_on_top`,excerpt:"Employees earn up to 40 hours of paid leave per year, usable for any reason; Chicago and Cook County ordinances layer additional requirements on top."},{id:"pk-lv-vt",state:"Vermont",name:"Vermont FMLI (voluntary)",program:"vt-fmli",agency:"Vermont Department of Labor",site:"labor.vermont.gov",effective:"Current",rules:`  structure: voluntary_opt_in
  entitlement_weeks: 6
  wage_replacement_pct: 60
  unpaid_vpfla_weeks: 12`,excerpt:"Vermont's Family and Medical Leave Insurance plan is a voluntary opt-in program paying 60 percent of wages for up to 6 weeks; the separate VPFLA guarantees 12 unpaid protected weeks."},{id:"pk-lv-nh",state:"New Hampshire",name:"NH Granite State Paid Family Leave",program:"nh-gspfl",agency:"New Hampshire Paid Family Leave Plan",site:"paidfamilymedicalleave.nh.gov",effective:"Current",rules:`  structure: voluntary_opt_in
  entitlement_weeks: 6
  wage_replacement_pct: 60
  employer_bwc_tax_credit: true`,excerpt:"The Granite State plan is a voluntary program providing 60 percent wage replacement for up to 6 weeks for employers and individuals who opt in."},{id:"pk-lv-ny-dbl",state:"New York",name:"New York DBL (statutory disability)",program:"ny-dbl",agency:"New York Workers' Compensation Board",site:"wcb.ny.gov",effective:"Current",rules:`  entitlement_weeks: 26
  weekly_cap: 170
  waiting_days: 7
  coordinates_with: ny_pfl_no_double_dipping`,excerpt:"Statutory disability benefits pay 50 percent of average weekly wages up to 170 dollars per week for up to 26 weeks; DBL and PFL cannot be collected for the same period."},{id:"pk-lv-nj-tdi",state:"New Jersey",name:"New Jersey TDI",program:"nj-tdi",agency:"New Jersey Department of Labor and Workforce Development",site:"myleavebenefits.nj.gov",effective:"Jan 1, 2026 parameters",rules:`  entitlement_weeks: 26
  wage_replacement_pct: 85
  waiting_days: 7_retroactive_after_3_weeks`,excerpt:"Temporary Disability Insurance pays approximately 85 percent of the average weekly wage for up to 26 weeks of the employee's own disability."},{id:"pk-lv-mn-esst",state:"Minnesota",name:"Minnesota Earned Sick and Safe Time",program:"mn-esst",agency:"Minnesota Department of Labor and Industry",site:"dli.mn.gov",effective:"Jan 1, 2024",rules:`  accrual: 1_hour_per_30_worked
  annual_accrual_cap_hours: 48
  carryover_cap_hours: 80
  covered: all_employees_80plus_hours_year`,excerpt:"Employees accrue one hour of earned sick and safe time per 30 hours worked, up to 48 hours per year, separate from the statewide Paid Leave program."},{id:"pk-lv-co-hfwa",state:"Colorado",name:"Colorado Healthy Families and Workplaces Act",program:"co-hfwa",agency:"Colorado Department of Labor and Employment",site:"cdle.colorado.gov",effective:"Current",rules:`  accrual: 1_hour_per_30_worked
  annual_cap_hours: 48
  phe_supplement_hours: 80
  covered: all_employers`,excerpt:"Employees accrue one hour of paid sick leave per 30 hours worked up to 48 hours per year, with up to 80 supplemental hours during a public health emergency."},{id:"pk-lv-az-pst",state:"Arizona",name:"Arizona earned paid sick time",program:"az-pst",agency:"Industrial Commission of Arizona",site:"azica.gov",effective:"Current",rules:`  accrual: 1_hour_per_30_worked
  annual_cap_hours_15plus: 40
  annual_cap_hours_under15: 24`,excerpt:"Employees accrue one hour of earned paid sick time per 30 hours worked, capped at 40 hours per year for employers with 15 or more employees and 24 hours for smaller employers."}].map(e=>l({id:e.id,name:e.name,category:"State leave",jurisdiction:e.state,domain:"leave",status:e.status??"current",programs:[e.program],rulesYaml:`pack: ${e.program}
jurisdiction: ${e.state}
domain: leave
rules:
${e.rules}
sources:
  - id: ${e.program}-agency
    retrieved: 2026-07-17`,sources:[{id:`${e.program}-agency`,label:e.agency,url:`https://${e.site}`,retrieved:"2026-07-17"}],sourceText:[{text:e.excerpt,citation:e.agency,effectiveDate:e.effective}],dependents:{agents:["ag-leave","ag-helpdesk"],evalHint:"es-leave: state program coverage scenarios"}})),f=[l({id:"ps-ca-finalpay",name:"California DLSE final pay rules",category:"State final pay",jurisdiction:"California",domain:"final-pay",status:"current",rulesYaml:`pack: ca-final-pay
jurisdiction: US-CA
domain: final-pay
rules:
  involuntary_deadline: immediately_at_termination
  voluntary_deadline: 72_hours_or_immediate_with_notice
  pto_payout: payout_required
  waiting_time_penalty_days_max: 30
sources:
  - id: ca-dlse-final-pay
    retrieved: 2026-07-15`,sources:[{id:"ca-dlse-final-pay",label:"California DIR, Labor Commissioner (DLSE)",url:"https://dir.ca.gov/dlse",retrieved:"2026-07-15"}],sourceText:[{text:"If an employer discharges an employee, the wages earned and unpaid at the time of discharge are due and payable immediately, including accrued vacation.",citation:"California DLSE final pay rules",effectiveDate:"current"},{text:"An employee who quits without notice must be paid within 72 hours; with at least 72 hours of notice, wages are due at the time of quitting. Willful failure accrues waiting time penalties up to 30 days.",citation:"California DLSE final pay rules",effectiveDate:"current"}],lastScanned:"2026-07-22 02:00",lastContentUpdate:"2026-02-10",nextReview:"2026-10-01",dependents:{agents:["ag-offboarding"],evalHint:"es-offboarding: CA involuntary exits check immediate final pay"}}),l({id:"ps-tx-payday",name:"Texas Payday Law (TWC)",category:"State final pay",jurisdiction:"Texas",domain:"final-pay",status:"current",rulesYaml:`pack: tx-payday-law
jurisdiction: US-TX
domain: final-pay
rules:
  involuntary_deadline: within_6_calendar_days
  voluntary_deadline: next_regular_payday
  pto_payout: per_written_policy
sources:
  - id: twc-payday-law
    retrieved: 2026-07-15`,sources:[{id:"twc-payday-law",label:"Texas Workforce Commission",url:"https://twc.texas.gov",retrieved:"2026-07-15"}],sourceText:[{text:"An employee who is laid off or discharged must be paid in full no later than the sixth day after the date of discharge. An employee who leaves voluntarily must be paid no later than the next regularly scheduled payday.",citation:"Texas Payday Law (TWC)",effectiveDate:"Current"},{text:"Payment of accrued vacation on separation is required only if a written agreement or policy provides for it.",citation:"Texas Payday Law (TWC)",effectiveDate:"Current"}],lastScanned:"2026-07-22 02:00",lastContentUpdate:"2025-11-06",nextReview:"2026-10-01",dependents:{agents:["ag-offboarding","ag-helpdesk"],evalHint:"es-offboarding: TX six-day involuntary deadline"}})],v={AK:{inv:"within_3_working_days",vol:"next_regular_payday_at_least_3_days_after_notice",pto:"per_written_policy"},AZ:{inv:"within_7_working_days_or_end_of_period",vol:"next_regular_payday",pto:"per_written_policy"},AR:{inv:"within_7_days_of_demand",vol:"next_regular_payday",pto:"per_written_policy"},CO:{inv:"immediately_at_termination",vol:"next_regular_payday",pto:"payout_required"},CT:{inv:"next_business_day",vol:"next_regular_payday",pto:"per_written_policy"},HI:{inv:"immediately_or_next_working_day",vol:"next_regular_payday",pto:"per_written_policy"},ID:{inv:"next_payday_or_10_days_48h_on_written_request",vol:"next_payday_or_10_days_48h_on_written_request",pto:"per_written_policy"},IL:{inv:"next_regular_payday",vol:"next_regular_payday",pto:"payout_required"},KY:{inv:"next_payday_or_14_days",vol:"next_payday_or_14_days",pto:"per_written_policy"},LA:{inv:"next_payday_or_15_days",vol:"next_payday_or_15_days",pto:"payout_required"},ME:{inv:"next_payday_or_2_weeks_after_demand",vol:"next_payday_or_2_weeks_after_demand",pto:"payout_required"},MA:{inv:"day_of_discharge",vol:"next_regular_payday",pto:"payout_required"},MN:{inv:"within_24_hours_of_demand",vol:"next_payday_within_20_days",pto:"per_written_policy"},MO:{inv:"day_of_discharge",vol:"next_regular_payday",pto:"per_written_policy"},MT:{inv:"immediately_unless_policy_extends_to_next_payday",vol:"next_payday_or_15_days",pto:"payout_required"},NE:{inv:"next_payday_or_2_weeks",vol:"next_payday_or_2_weeks",pto:"payout_required"},NV:{inv:"immediately_within_3_days",vol:"next_payday_or_7_days",pto:"per_written_policy"},NH:{inv:"within_72_hours",vol:"next_regular_payday",pto:"per_written_policy"},NM:{inv:"within_5_days_for_fixed_wages",vol:"next_regular_payday",pto:"per_written_policy"},ND:{inv:"next_regular_payday",vol:"next_regular_payday",pto:"payout_required"},OR:{inv:"end_of_next_business_day",vol:"immediately_with_48h_notice_else_within_5_days",pto:"per_written_policy"},RI:{inv:"next_regular_payday",vol:"next_regular_payday",pto:"payout_required_after_1_year"},SC:{inv:"within_48_hours_or_next_payday_max_30_days",vol:"within_48_hours_or_next_payday_max_30_days",pto:"per_written_policy"},TN:{inv:"next_payday_or_21_days",vol:"next_payday_or_21_days",pto:"per_written_policy"},UT:{inv:"within_24_hours",vol:"next_regular_payday",pto:"per_written_policy"},VT:{inv:"within_72_hours",vol:"next_regular_payday_or_next_friday",pto:"per_written_policy"},WI:{inv:"next_payday_or_31_days",vol:"next_payday_or_31_days",pto:"per_written_policy"}},g={payout_required:"accrued, unused vacation must be paid out with final wages",payout_required_after_1_year:"accrued vacation must be paid out after one year of service",per_written_policy:"accrued vacation is paid per the employer's written policy"},h=c.filter(([e])=>"CA"!==e&&"TX"!==e).map(([e,a,t,i])=>{let r=v[e]??{inv:"next_regular_payday",vol:"next_regular_payday",pto:"per_written_policy"},n=e.toLowerCase();return l({id:`pk-fp-${n}`,name:`${a} final pay timing`,category:"State final pay",jurisdiction:a,domain:"final-pay",status:"current",rulesYaml:`pack: ${n}-final-pay
jurisdiction: US-${e}
domain: final-pay
rules:
  involuntary_deadline: ${r.inv}
  voluntary_deadline: ${r.vol}
  pto_payout: ${r.pto}
  delivery_method: check_or_direct_deposit_on_file
sources:
  - id: ${n}-agency-final-pay
    retrieved: 2026-07-18`,sources:[{id:`${n}-agency-final-pay`,label:t,url:`https://${i}`,retrieved:"2026-07-18"}],sourceText:[{text:`Final wages for a discharged employee are due ${p(r.inv)}; for an employee who quits, ${p(r.vol)}. In ${a}, ${g[r.pto]}.`,citation:t,effectiveDate:"Current"}],dependents:{agents:["ag-offboarding"],evalHint:"es-offboarding: final pay timing scenarios"}})}),w={CA:"over_8_per_day_1.5x_over_12_2x",AK:"over_8_per_day",NV:"over_8_per_day_if_rate_under_1.5x_min_wage",CO:"over_12_per_day_or_12_consecutive"},b={CA:"16.90 statewide, higher local ordinances apply",WA:"17.58 indexed annually",NY:"17.00 downstate, 16.00 remainder of state",CO:"15.16 statewide, Denver sets a higher local rate",AZ:"14.85 indexed annually",FL:"14.00, rises to 15.00 on Sep 30, 2026",IL:"15.00",NJ:"15.75 indexed annually",MA:"15.00",CT:"16.35 indexed annually",OR:"15.05 standard tier, Portland metro higher",MN:"11.13 indexed annually",MO:"13.75 per Proposition A",NE:"13.50, rises to 15.00 in 2026 cycle",MD:"15.00",MI:"12.48 per the 2025 adjustment",OH:"10.70 indexed annually",MT:"10.55 indexed annually",SD:"11.50 indexed annually",VT:"14.01 indexed annually",VA:"12.41",HI:"14.00, rises to 16.00 in 2028",AK:"11.91 indexed annually",NM:"12.00",DE:"15.00",RI:"15.00",ME:"14.65 indexed annually",NV:"12.00 flat rate"},k=new Set(["CA","WA","OR","NV","MN","MT","AK"]),x=new Set(["CA","KY"]),C={MN:48,KS:46},D=c.map(([e,a,t,i])=>{let r=e.toLowerCase(),n=w[e],o=b[e]??"follows the federal 7.25 floor",s=["  overtime_threshold_hours: 40",`  daily_ot: ${n?"true":"false"}`,...n?[`  daily_ot_rule: ${n}`]:[],`  min_wage_note: ${o.split(" ").join("_")}`,`  tipped_credit_allowed: ${k.has(e)?"false":"true"}`,...x.has(e)?["  seventh_day_ot: true"]:[],...C[e]?[`  state_weekly_ot_threshold: ${C[e]}`]:[]].join("\n"),d=n?` and daily overtime ${p(n).split(".").join(" point ")}`:"";return l({id:`pk-wh-${r}`,name:`${a} wage and hour rules`,category:"State wage-hour",jurisdiction:a,domain:"wage-hour",status:"current",rulesYaml:`pack: ${r}-wage-hour
jurisdiction: US-${e}
domain: wage-hour
rules:
${s}
sources:
  - id: ${r}-agency-wage-hour
    retrieved: 2026-07-19`,sources:[{id:`${r}-agency-wage-hour`,label:t,url:`https://${i}`,retrieved:"2026-07-19"}],sourceText:[{text:`Non-exempt employees in ${a} earn overtime at one and one half times the regular rate over 40 hours in a workweek${d}. The state minimum wage note: ${o}.`,citation:t,effectiveDate:"Jan 1, 2026"}],dependents:{agents:["ag-payroll-audit"],evalHint:"es-payroll: per-state OT and minimum wage checks"}})}),S=[l({id:"ps-co-epewa",name:"Colorado EPEWA: Equal Pay for Equal Work Act",category:"Pay transparency",jurisdiction:"Colorado",domain:"transparency",status:"current",rulesYaml:`pack: co-epewa
jurisdiction: US-CO
domain: transparency
rules:
  range_in_posting: true
  benefits_description: true
  promotion_notice: same_day_to_eligible_employees
  penalty_range_usd: [500, 10000]
sources:
  - id: cdle-epewa
    retrieved: 2026-07-15`,sources:[{id:"cdle-epewa",label:"Colorado Department of Labor and Employment",url:"https://cdle.colorado.gov",retrieved:"2026-07-15"}],sourceText:[{text:"Employers must disclose in each posting the salary or salary range and a general description of benefits; promotion opportunities carry notice requirements. Penalties range from $500 to $10,000 per violation.",citation:"Colorado EPEWA",effectiveDate:"Jan 1, 2024 (as amended)"},{text:"Employers must announce internal promotion opportunities to all eligible Colorado employees on the same calendar day.",citation:"Colorado EPEWA",effectiveDate:"Jan 1, 2024 (as amended)"}],lastScanned:"2026-07-25 02:00",lastContentUpdate:"2026-03-04",nextReview:"2026-09-15",dependents:{agents:["ag-pay-compliance","ag-screener"],evalHint:"es-paycomp: CO strictest-state scenarios"}}),l({id:"ps-ca-sb1162",name:"CA SB 1162 as amended by SB 642",category:"Pay transparency",jurisdiction:"California",domain:"transparency",status:"current",rulesYaml:`pack: ca-sb1162-sb642
jurisdiction: US-CA
domain: transparency
rules:
  employer_threshold: 15
  range_in_posting: true
  standard: good_faith_estimate
  pay_data_reporting: annual_to_crd
  third_party_postings_covered: true
sources:
  - id: ca-leginfo-sb1162
    retrieved: 2026-07-15`,sources:[{id:"ca-leginfo-sb1162",label:"California Legislative Information",url:"https://leginfo.legislature.ca.gov",retrieved:"2026-07-15"}],sourceText:[{text:"Pay scale disclosures must reflect a good-faith estimate of the range the employer reasonably expects to pay.",citation:"CA SB 1162 as amended by SB 642",effectiveDate:"Jan 1, 2026"},{text:"Employers with 15 or more employees must include the pay scale for a position in any job posting, including postings published through third parties.",citation:"CA SB 1162 as amended by SB 642",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-25 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-09-15",dependents:{agents:["ag-pay-compliance"],evalHint:"es-paycomp: good-faith range scenarios"}}),l({id:"ps-il-hb3129",name:"IL HB 3129 pay transparency",category:"Pay transparency",jurisdiction:"Illinois",domain:"transparency",status:"current",rulesYaml:`pack: il-hb3129
jurisdiction: US-IL
domain: transparency
rules:
  employer_threshold: 15
  range_in_posting: true
  benefits_description: true
  hyperlink_satisfies: true
sources:
  - id: ilga-hb3129
    retrieved: 2026-07-15`,sources:[{id:"ilga-hb3129",label:"Illinois General Assembly",url:"https://ilga.gov",retrieved:"2026-07-15"}],sourceText:[{text:"Employers with 15 or more employees must include the pay scale and benefits in job postings.",citation:"IL HB 3129",effectiveDate:"Jan 1, 2025"},{text:"The pay scale and benefits requirement may be satisfied by a hyperlink to a publicly viewable page.",citation:"IL HB 3129",effectiveDate:"Jan 1, 2025"}],lastScanned:"2026-07-25 02:00",lastContentUpdate:"2025-12-12",nextReview:"2026-09-15",dependents:{agents:["ag-pay-compliance"],evalHint:"es-paycomp: IL posting scenarios"}}),l({id:"ps-de-transparency",name:"Delaware pay transparency law",category:"Pay transparency",jurisdiction:"Delaware",domain:"transparency",status:"pending",rulesYaml:`pack: de-pay-transparency
jurisdiction: US-DE
domain: transparency
rules:
  signed: 2025
  effective: 2027-09-26
  range_in_posting: true
  applied_by_agents: false_until_effective
sources:
  - id: de-legis-transparency
    retrieved: 2026-07-15`,sources:[{id:"de-legis-transparency",label:"Delaware General Assembly",url:"https://legis.delaware.gov",retrieved:"2026-07-15"}],sourceText:[{text:"Signed in 2025 and not effective until September 26, 2027. Agents deliberately do not apply this law to current postings; it is tracked for the effective date.",citation:"Delaware pay transparency law",effectiveDate:"Sep 26, 2027 (not yet in force)"}],lastScanned:"2026-07-25 02:00",lastContentUpdate:"2025-09-30",nextReview:"2026-09-01",dependents:{agents:["ag-pay-compliance"],evalHint:"es-paycomp: designed-to-fail scenario applies DE early and must be caught"}})],L=[{id:"pk-pt-ny",juris:"New York",name:"New York pay transparency (Labor Law 194-b)",agency:"New York State Department of Labor",site:"dol.ny.gov",effective:"Sep 17, 2023",rules:`  employer_threshold: 4
  range_in_posting: true
  standard: good_faith
  remote_reach: covers_remote_reporting_to_ny`,excerpt:"Employers with four or more employees must include a good faith compensation range in any advertisement for a job, promotion, or transfer that can or will be performed in New York, including remote roles reporting into the state."},{id:"pk-pt-wa",juris:"Washington",name:"Washington EPOA posting disclosures",agency:"Washington Department of Labor and Industries",site:"lni.wa.gov",effective:"Jan 1, 2023",rules:`  employer_threshold: 15
  range_in_posting: true
  benefits_description: true
  remote_reach: applies_to_postings_recruiting_wa`,excerpt:"Employers with 15 or more employees must disclose the wage scale or salary range and a general description of benefits and other compensation in each job posting."},{id:"pk-pt-nj",juris:"New Jersey",name:"New Jersey Pay and Benefit Transparency Act",agency:"New Jersey Department of Labor and Workforce Development",site:"nj.gov/labor",effective:"Jun 1, 2025",rules:`  employer_threshold: 10
  range_in_posting: true
  benefits_description: true
  promotion_notice: reasonable_efforts`,excerpt:"Employers with 10 or more employees must disclose the hourly wage or salary range and a general description of benefits in new job postings and make reasonable efforts to announce promotion opportunities."},{id:"pk-pt-ct",juris:"Connecticut",name:"Connecticut wage range disclosure (PA 21-30)",agency:"Connecticut Department of Labor",site:"ctdol.state.ct.us",effective:"Oct 1, 2021",rules:`  range_to_applicant: before_or_at_offer
  range_to_employee: on_hire_change_or_request
  range_in_posting: not_required`,excerpt:"Employers must provide applicants the wage range no later than when an offer is extended or on request, and provide employees the range at hire, on a change in position, or on first request."},{id:"pk-pt-nv",juris:"Nevada",name:"Nevada SB 293 wage range disclosure",agency:"Office of the Nevada Labor Commissioner",site:"labor.nv.gov",effective:"Oct 1, 2021",rules:`  range_to_applicant: automatic_after_interview
  range_to_employee: on_promotion_or_transfer_request
  range_in_posting: not_required`,excerpt:"Employers must automatically provide the wage or salary range to an applicant who has completed an interview, and to employees who request it for a promotion or transfer."},{id:"pk-pt-ri",juris:"Rhode Island",name:"Rhode Island Pay Equity Act disclosures",agency:"Rhode Island Department of Labor and Training",site:"dlt.ri.gov",effective:"Jan 1, 2023",rules:`  range_on_request: true
  range_at_hire: true
  range_on_position_change: true
  salary_history_ban: true`,excerpt:"Employers must provide the wage range on request, at the time of hire, and when an employee moves into a new position, and may not rely on salary history."},{id:"pk-pt-md",juris:"Maryland",name:"Maryland Wage Range Transparency",agency:"Maryland Department of Labor",site:"labor.maryland.gov",effective:"Oct 1, 2024",rules:`  range_in_posting: true
  benefits_description: true
  applies_to: public_and_internal_postings
  good_faith_standard: true`,excerpt:"Employers must include a good faith wage range and a general description of benefits in all public and internal postings for positions performed at least partly in Maryland."},{id:"pk-pt-hi",juris:"Hawaii",name:"Hawaii pay transparency (SB 1057)",agency:"Hawaii Department of Labor and Industrial Relations",site:"labor.hawaii.gov",effective:"Jan 1, 2024",rules:`  employer_threshold: 50
  range_in_posting: true
  internal_transfers_exempt: true`,excerpt:"Employers with 50 or more employees must disclose an hourly rate or salary range that reasonably reflects actual expected compensation in job listings."},{id:"pk-pt-mn",juris:"Minnesota",name:"Minnesota pay transparency (SF 3852)",agency:"Minnesota Department of Labor and Industry",site:"dli.mn.gov",effective:"Jan 1, 2025",rules:`  employer_threshold: 30
  range_in_posting: true
  benefits_summary: true
  fixed_rate_allowed_if_no_range: true`,excerpt:"Employers with 30 or more employees must include a good faith salary range or fixed pay rate and a general description of benefits in each posting."},{id:"pk-pt-dc",juris:"District of Columbia",name:"DC Wage Transparency Amendment Act",agency:"DC Office of Human Rights",site:"ohr.dc.gov",effective:"Jun 30, 2024",rules:`  range_in_posting: true
  healthcare_benefits_disclosure: before_first_interview
  salary_history_screening_ban: true`,excerpt:"Employers must include the minimum and maximum projected pay in all job listings and disclose healthcare benefits before the first interview; screening on salary history is prohibited."},{id:"pk-pt-nyc",juris:"New York City",name:"NYC salary range in ads (Local Law 32)",agency:"NYC Commission on Human Rights",site:"nyc.gov/cchr",effective:"Nov 1, 2022",rules:`  employer_threshold: 4
  range_in_ad: good_faith
  covered: jobs_performed_in_nyc_including_remote`,excerpt:"Employers with four or more employees must state the good faith minimum and maximum salary in any advertisement for a job, promotion, or transfer that can be performed in New York City."},{id:"pk-pt-cincinnati",juris:"Cincinnati",name:"Cincinnati salary ordinance (83-2019)",agency:"City of Cincinnati",site:"cincinnati-oh.gov",effective:"Mar 13, 2020",rules:`  employer_threshold: 15_within_city
  salary_history_ban: true
  range_on_request: after_conditional_offer`,excerpt:"Employers with 15 or more employees in the city may not ask about salary history and must provide a pay scale on reasonable request after a conditional offer."},{id:"pk-pt-toledo",juris:"Toledo",name:"Toledo Pay Equity Act (TMC 768)",agency:"City of Toledo",site:"toledo.oh.gov",effective:"Jun 25, 2020",rules:`  employer_threshold: 15_within_city
  salary_history_ban: true
  range_on_request: after_conditional_offer`,excerpt:"Employers with 15 or more employees in Toledo may not inquire about salary history and must provide the pay scale to an applicant who received a conditional offer, on reasonable request."}].map(e=>l({id:e.id,name:e.name,category:"Pay transparency",jurisdiction:e.juris,domain:"transparency",status:"current",rulesYaml:`pack: ${e.id.replace("pk-pt-","")}-pay-transparency
jurisdiction: ${e.juris}
domain: transparency
rules:
${e.rules}
sources:
  - id: ${e.id}-source
    retrieved: 2026-07-16`,sources:[{id:`${e.id}-source`,label:e.agency,url:`https://${e.site}`,retrieved:"2026-07-16"}],sourceText:[{text:e.excerpt,citation:e.agency,effectiveDate:e.effective}],dependents:{agents:["ag-pay-compliance"],evalHint:"es-paycomp: strictest-jurisdiction resolution scenarios"}})),A=new Set(["AR","ID","KS","KY","MS","MT","NE","ND","OK","SD","WV","WY"]),M=new Set(["CA","NY","IL","MD","MN","WA","HI","DE","IA","NH","NM","NC","SC","UT","PA","OH","LA","MO","AK","CT"]),T=new Set(["CA","NY","NJ","MA","CT","OR","WA","CO","AZ","MI","MN","IL","VT","RI","NM","ME","NV","MD"]),j=new Set(["AL","AZ","FL","GA","NC","SC","TN","UT"]),F={CA:"Labor Code 2810.5 wage notice (DLSE-NTE)",NY:"LS 54 pay notice at hire",IL:"820 ILCS 115 rate notice",WA:"initial hire pay disclosure",MN:"wage notice per the 2019 Wage Theft Law",MD:"payment-at-hire notice"},P={CA:20,NY:20,TX:20,AL:7,GA:10,FL:20,VA:20,IA:15},I=[...m,...y,..._,...f,...h,...D,...S,...L,...c.filter(([e])=>!A.has(e)).map(([e,a,t,i])=>{let r=e.toLowerCase(),n=M.has(e),o=F[e],s=P[e]??20,d=[`  wage_notice_at_hire: ${n}`,...o?[`  wage_notice_form: ${o.split(" ").join("_")}`]:[],`  sick_leave_notice: ${T.has(e)}`,`  state_withholding_form: ${"TX"===e||"FL"===e||"TN"===e||"WA"===e||"NV"===e||"SD"===e||"AK"===e?"none_no_state_income_tax":"state_w4_equivalent"}`,`  new_hire_report_days: ${s}`,...j.has(e)?["  e_verify_required: true"]:[]].join("\n"),c=n?`a written wage notice${o?` (${o})`:""} stating the rate of pay and payday`:"the required posters and payday designation";return l({id:`pk-onb-${r}`,name:`${a} onboarding disclosures`,category:"State onboarding disclosures",jurisdiction:a,domain:"onboarding",status:"current",rulesYaml:`pack: ${r}-onboarding-disclosures
jurisdiction: US-${e}
domain: onboarding
rules:
${d}
sources:
  - id: ${r}-agency-onboarding
    retrieved: 2026-07-20`,sources:[{id:`${r}-agency-onboarding`,label:t,url:`https://${i}`,retrieved:"2026-07-20"}],sourceText:[{text:`At hire, ${a} employers must provide ${c}, collect the applicable withholding certificate, and report the new hire within ${s} days.${j.has(e)?" E-Verify participation is required.":""}`,citation:t,effectiveDate:"Current"}],dependents:{agents:["ag-onboarding"],evalHint:"es-onboarding: state packet assembly scenarios"}})}),l({id:"ps-handbook",name:"Meridian Employee Handbook",category:"Company documents",jurisdiction:"Meridian Group (US)",domain:"company",status:"current",rulesYaml:`pack: mer-handbook-v61
jurisdiction: Meridian Group (US)
domain: company
rules:
  version: 6.1
  sections_indexed: [4.2_parental_leave, 7_pto]
  more_generous_term_applies: true
  upload_channel: hr_shared_services
sources:
  - id: mer-handbook-upload
    retrieved: 2026-07-18`,sources:[{id:"mer-handbook-upload",label:"Meridian HR Shared Services (manual upload)",url:"https://meridian.example/handbook/v6.1",retrieved:"2026-07-18"}],sourceText:[{text:"Section 4.2 Parental Leave: Meridian provides paid parental leave per the schedule in this section, coordinated with any state benefit.",citation:"Meridian Employee Handbook v6.1",effectiveDate:"Mar 1, 2026"},{text:"Section 4.2 Parental Leave: employees may elect to apply accrued PTO to any unpaid portion of job-protected bonding leave. Where law and policy differ, the more generous term applies.",citation:"Meridian Employee Handbook v6.1",effectiveDate:"Mar 1, 2026"},{text:"Section 7 PTO: accrued, unused PTO carries over up to the state-specific cap listed in the addendum for California, Colorado, and Illinois.",citation:"Meridian Employee Handbook v6.1",effectiveDate:"Mar 1, 2026"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2026-03-01",nextReview:"2026-09-01",versionHistory:[{version:"6.1",date:"2026-03-01",note:"Parental leave schedule updated; PTO addenda for CA, CO, IL"},{version:"5.4",date:"2025-01-01",note:"Superseded edition, retained for audit"},{version:"5.0",date:"2024-06-01",note:"Initial ingestion"}],dependents:{agents:["ag-leave","ag-helpdesk","ag-manager","ag-offboarding"],evalHint:"es-helpdesk: handbook citations must name v6.1, not v5.4"}}),l({id:"ps-handbook-v5",name:"Meridian Employee Handbook v5.4",category:"Company documents",jurisdiction:"Meridian Group (US)",domain:"company",status:"superseded",supersededBy:"ps-handbook",rulesYaml:`pack: mer-handbook-v54
jurisdiction: Meridian Group (US)
domain: company
rules:
  version: 5.4
  superseded_by: mer-handbook-v61
  effective_window: [2025-01-01, 2026-02-28]
  retained_for: audit_and_historical_citations
sources:
  - id: mer-handbook-v54-upload
    retrieved: 2026-03-01`,sources:[{id:"mer-handbook-v54-upload",label:"Meridian HR Shared Services (manual upload)",url:"https://meridian.example/handbook/v5.4",retrieved:"2026-03-01"}],sourceText:[{text:"Section 4.2 Parental Leave (v5.4): employees may apply accrued PTO to unpaid bonding leave with manager approval. Superseded March 1, 2026 by v6.1, which removes the manager approval requirement.",citation:"Meridian Employee Handbook v5.4",effectiveDate:"Jan 1, 2025 to Feb 28, 2026"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2025-01-01",nextReview:"2026-10-01",versionHistory:[{version:"5.4",date:"2025-01-01",note:"Final edition before v6.1"},{version:"5.0",date:"2024-06-01",note:"Initial ingestion"}],dependents:{agents:["ag-helpdesk"],evalHint:"es-helpdesk: designed-to-fail scenario cites v5.4 and must be flagged stale"}}),l({id:"ps-spd-medical",name:"Meridian Medical SPD",category:"Company documents",jurisdiction:"Meridian Group (US)",domain:"benefits",status:"current",rulesYaml:`pack: mer-spd-medical
jurisdiction: Meridian Group (US)
domain: benefits
rules:
  plan_year: 2026
  in_network_coinsurance_pct: 80
  deductible_applies: true
  oop_max: per_schedule_of_benefits
sources:
  - id: mer-spd-medical-upload
    retrieved: 2026-07-18`,sources:[{id:"mer-spd-medical-upload",label:"Meridian Benefits (manual upload)",url:"https://meridian.example/spd/medical-2026",retrieved:"2026-07-18"}],sourceText:[{text:"The plan pays 80 percent of covered in-network charges after the deductible; the out-of-pocket maximum for the 2026 plan year is listed in the schedule of benefits.",citation:"Meridian Medical SPD",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-helpdesk"],evalHint:"es-helpdesk: benefits answers cite the 2026 SPD"}}),l({id:"ps-pto",name:"Meridian PTO Policy",category:"Company documents",jurisdiction:"Meridian Group (US)",domain:"company",status:"current",rulesYaml:`pack: mer-pto-policy
jurisdiction: Meridian Group (US)
domain: company
rules:
  accrual_basis: per_pay_period_by_tenure_band
  carryover: state_addenda_for_ca_co_il
  negative_balance_max_hours: 40
  payout_on_separation: per_state_law
sources:
  - id: mer-pto-upload
    retrieved: 2026-07-18`,sources:[{id:"mer-pto-upload",label:"Meridian HR Shared Services (manual upload)",url:"https://meridian.example/policies/pto-2026",retrieved:"2026-07-18"}],sourceText:[{text:"Full-time employees accrue PTO per the schedule in this policy; state addenda for California, Colorado, and Illinois modify carryover and payout terms where required.",citation:"Meridian PTO Policy",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-helpdesk","ag-manager","ag-offboarding"],evalHint:"es-helpdesk: PTO carryover answers vary by state addendum"}}),l({id:"ps-lakeshore-handbook",name:"Lakeshore Care Handbook",category:"Company documents",jurisdiction:"Lakeshore Care (SF population)",domain:"company",status:"current",rulesYaml:`pack: lks-handbook-v30
jurisdiction: Lakeshore Care (SF population)
domain: company
rules:
  version: 3.0
  document_set: separate_from_meridian
  precedence: lakeshore_terms_govern_for_sf_population
  ingestion: forward_deployed_engagement_team
sources:
  - id: lks-handbook-ingest
    retrieved: 2026-07-18`,sources:[{id:"lks-handbook-ingest",label:"Forward-deployed ingestion (engagement team)",url:"https://lakeshore.example/handbook/v3.0",retrieved:"2026-07-18"}],sourceText:[{text:"Lakeshore Care employees follow the Lakeshore document set; where Lakeshore terms differ from Meridian terms, the Lakeshore handbook governs for the SF population.",citation:"Lakeshore Care Handbook v3.0",effectiveDate:"Jun 1, 2025"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2025-06-01",nextReview:"2026-09-01",dependents:{agents:["ag-leave","ag-helpdesk","ag-offboarding"],evalHint:"es-helpdesk: Lakeshore askers must never receive Meridian-only terms"}}),l({id:"ps-std",name:"Meridian STD plan (carrier document)",category:"Company documents",jurisdiction:"Meridian Group (US)",domain:"benefits",status:"current",rulesYaml:`pack: mer-std-plan
jurisdiction: Meridian Group (US)
domain: benefits
rules:
  plan_year: 2026
  elimination_days: 7
  max_benefit_weeks: 26
  coordination: offsets_state_disability_benefits
sources:
  - id: mer-std-carrier-doc
    retrieved: 2026-07-18`,sources:[{id:"mer-std-carrier-doc",label:"Meridian Benefits (carrier document upload)",url:"https://meridian.example/plans/std-2026",retrieved:"2026-07-18"}],sourceText:[{text:"Short-term disability benefits are payable per the plan schedule while the employee is under continuous care for a covered disability.",citation:"Meridian STD plan (carrier document)",effectiveDate:"Jan 1, 2026"},{text:"Benefits begin after the seven calendar day elimination period and continue up to 26 weeks per disability, offset by any state disability benefit received.",citation:"Meridian STD plan (carrier document)",effectiveDate:"Jan 1, 2026"}],lastScanned:"2026-07-18 02:00",lastContentUpdate:"2026-01-01",nextReview:"2026-10-15",dependents:{agents:["ag-leave"],evalHint:"es-leave: TX medical leave pay comes only from this plan"}}),...[{id:"pk-mer-handbook-42-parental",name:"Meridian Handbook 4.2 Parental Leave",juris:"Meridian Group (US)",domain:"company",agents:["ag-leave","ag-helpdesk","ag-manager"],citation:"Meridian Employee Handbook v6.1, section 4.2",effective:"Mar 1, 2026",rules:`  paid_parental_weeks: 8
  coordination: concurrent_with_state_benefits
  pto_application: employee_election
  eligibility_tenure_months: 6`,excerpt:"Meridian provides 8 weeks of paid parental leave, run concurrently with any state benefit; employees with at least 6 months of tenure are eligible, and accrued PTO may be applied to unpaid portions at the employee's election."},{id:"pk-mer-handbook-7-pto",name:"Meridian Handbook 7 PTO",juris:"Meridian Group (US)",domain:"company",agents:["ag-helpdesk","ag-manager"],citation:"Meridian Employee Handbook v6.1, section 7",effective:"Mar 1, 2026",rules:`  accrual_bands: [15, 20, 25]_days_by_tenure
  carryover_default_days: 5
  state_addenda: [CA, CO, IL]
  blackout_periods: none`,excerpt:"PTO accrues at 15, 20, or 25 days per year by tenure band; up to 5 days carry over by default, with California, Colorado, and Illinois addenda controlling where state law requires more."},{id:"pk-mer-code-of-conduct",name:"Meridian Code of Conduct",juris:"Meridian Group (US)",domain:"company",agents:["ag-helpdesk","ag-manager"],citation:"Meridian Code of Conduct 2026",effective:"Jan 1, 2026",rules:`  annual_attestation: required
  gifts_threshold_usd: 100
  conflicts_disclosure: within_30_days
  reporting_channel: ethics_hotline_anonymous`,excerpt:"All employees attest annually; gifts above 100 dollars require pre-approval, conflicts of interest must be disclosed within 30 days, and reports may be made anonymously through the ethics hotline."},{id:"pk-lks-handbook-leave",name:"Lakeshore Handbook 5 Leaves of Absence",juris:"Lakeshore Care (SF population)",domain:"company",agents:["ag-leave","ag-helpdesk"],citation:"Lakeshore Care Handbook v3.0, section 5",effective:"Jun 1, 2025",rules:`  paid_parental_weeks: 6
  sf_pplo_topup: coordinated
  precedence: lakeshore_terms_for_sf_population`,excerpt:"Lakeshore provides 6 weeks of paid parental leave coordinated with the San Francisco PPLO top-up; for the SF population these terms govern over Meridian defaults."},{id:"pk-mer-spd-dental",name:"Meridian Dental SPD",juris:"Meridian Group (US)",domain:"benefits",agents:["ag-helpdesk"],citation:"Meridian Dental SPD",effective:"Jan 1, 2026",rules:`  plan_year: 2026
  preventive_coverage_pct: 100
  basic_coverage_pct: 80
  annual_max_usd: 2000`,excerpt:"The dental plan covers preventive care at 100 percent and basic services at 80 percent, with a 2,000 dollar annual maximum per covered member for the 2026 plan year."},{id:"pk-mer-spd-vision",name:"Meridian Vision SPD",juris:"Meridian Group (US)",domain:"benefits",agents:["ag-helpdesk"],citation:"Meridian Vision SPD",effective:"Jan 1, 2026",rules:`  plan_year: 2026
  exam_copay_usd: 10
  frames_allowance_usd: 200
  frequency_months: 12`,excerpt:"The vision plan provides an annual exam with a 10 dollar copay and a 200 dollar frames allowance every 12 months for the 2026 plan year."},{id:"pk-mer-ltd",name:"Meridian LTD plan (carrier document)",juris:"Meridian Group (US)",domain:"benefits",agents:["ag-leave","ag-helpdesk"],citation:"Meridian LTD plan (carrier document)",effective:"Jan 1, 2026",rules:`  elimination_days: 180
  benefit_pct: 60
  monthly_cap_usd: 10000
  own_occupation_months: 24`,excerpt:"Long-term disability pays 60 percent of pre-disability earnings up to 10,000 dollars per month after a 180 day elimination period, with an own-occupation definition for the first 24 months."},{id:"pk-lks-pto",name:"Lakeshore Care PTO Policy",juris:"Lakeshore Care (SF population)",domain:"company",agents:["ag-helpdesk","ag-offboarding"],citation:"Lakeshore Care PTO Policy",effective:"Jun 1, 2025",rules:`  accrual: 1.54_hours_per_pay_period_band_1
  sf_psl_ordinance: layered_on_top
  payout_on_separation: required_ca`,excerpt:"Lakeshore PTO accrues per pay period by band, with the San Francisco Paid Sick Leave Ordinance layered on top; accrued PTO is paid out on separation as California requires."},{id:"pk-mer-remote-work",name:"Meridian Remote Work Policy",juris:"Meridian Group (US)",domain:"company",agents:["ag-helpdesk","ag-manager"],citation:"Meridian Remote Work Policy",effective:"Sep 1, 2025",rules:`  eligibility: role_based_manager_approved
  state_registration_check: required_before_relocation
  stipend_usd_monthly: 75
  equipment: company_provided`,excerpt:"Remote work is role-based and manager approved; employees must confirm the new work state is registered before relocating, and the payroll team is notified so withholding and SUI follow the work state."},{id:"pk-mer-travel-expense",name:"Meridian Travel and Expense Policy",juris:"Meridian Group (US)",domain:"company",agents:["ag-helpdesk","ag-manager"],citation:"Meridian Travel and Expense Policy",effective:"Apr 1, 2026",rules:`  booking_tool: required
  meal_per_diem_usd: 65
  receipt_threshold_usd: 25
  approval: manager_then_finance_over_1000`,excerpt:"Travel must be booked through the approved tool; the meal per diem is 65 dollars, receipts are required above 25 dollars, and expenses over 1,000 dollars route to finance after manager approval."},{id:"pk-mer-401k-spd",name:"Meridian 401(k) SPD",juris:"Meridian Group (US)",domain:"benefits",agents:["ag-helpdesk","ag-offboarding"],citation:"Meridian 401(k) SPD",effective:"Jan 1, 2026",rules:`  match: 100_pct_of_first_4_pct
  vesting: immediate_on_match
  auto_enroll_pct: 3
  loan_limit: lesser_of_50k_or_50_pct`,excerpt:"Meridian matches 100 percent of the first 4 percent of deferrals with immediate vesting; new hires are auto-enrolled at 3 percent unless they opt out."}].map(e=>l({id:e.id,name:e.name,category:"Company documents",jurisdiction:e.juris,domain:e.domain,status:"current",rulesYaml:`pack: ${e.id.replace("pk-","")}
jurisdiction: ${e.juris}
domain: ${e.domain}
rules:
${e.rules}
sources:
  - id: ${e.id}-upload
    retrieved: 2026-07-18`,sources:[{id:`${e.id}-upload`,label:"Customer upload (HR Shared Services)",url:`https://meridian.example/docs/${e.id.replace("pk-","")}`,retrieved:"2026-07-18"}],sourceText:[{text:e.excerpt,citation:e.citation,effectiveDate:e.effective}],dependents:{agents:e.agents,evalHint:"es-helpdesk: company terms cited beside statutory packs"}}))],R=["Federal","State leave","State final pay","State wage-hour","Pay transparency","State onboarding disclosures","Company documents"].map(e=>({category:e,count:I.filter(a=>a.category===e).length}));a.VOLUMES_V3.policyPacks,a.VOLUMES_V3.policyPacksByCategory,t.coverage,e.s(["packById",0,e=>I.find(a=>a.id.toLowerCase()===e.toLowerCase()),"packCategories",0,R,"policyPacks",0,I])}]);