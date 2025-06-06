declare module 'dayjs' {
    interface Dayjs {
        format(template?: string): string;
        add(value: number, unit?: string): Dayjs;
        subtract(value: number, unit?: string): Dayjs;
        isAfter(date: Dayjs | string | number | Date): boolean;
        unix(): number;
    }

    function dayjs(date?: string | number | Date | Dayjs): Dayjs;
    export = dayjs;
}
