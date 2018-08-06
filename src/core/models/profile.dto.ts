export class ProfileDTO {
    id: string;
    officialId: string;
    name: string;
    mobile: string;
    bloodGroup: string;
    birthday: string;
    inCharge: {officeId: string, departmentId: string, designationId: string};
    hasAdditionalCharge: boolean;
    additionalCharge?: {officeId: string, departmentId: string, designationId: string};
    address?: { present: string, permanent: string };
}