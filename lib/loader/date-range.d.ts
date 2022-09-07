import { AttrList } from '../utils/attr-list';
export declare enum DateRangeAttribute {
    ID = "ID",
    CLASS = "CLASS",
    START_DATE = "START-DATE",
    DURATION = "DURATION",
    END_DATE = "END-DATE",
    END_ON_NEXT = "END-ON-NEXT",
    PLANNED_DURATION = "PLANNED-DURATION",
    SCTE35_OUT = "SCTE35-OUT",
    SCTE35_IN = "SCTE35-IN"
}
export declare class DateRange {
    attr: AttrList;
    private _startDate;
    private _endDate?;
    private _badValueForSameId?;
    constructor(dateRangeAttr: AttrList, dateRangeWithSameId?: DateRange);
    get id(): string;
    get class(): string;
    get startDate(): Date;
    get endDate(): Date | null;
    get duration(): number | null;
    get plannedDuration(): number | null;
    get endOnNext(): boolean;
    get isValid(): boolean;
}
//# sourceMappingURL=date-range.d.ts.map