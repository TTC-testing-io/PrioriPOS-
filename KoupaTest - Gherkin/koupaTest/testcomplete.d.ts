// testcomplete.d.ts
declare var Log: {
    Message(msg: string): void;
    Warning(msg: string): void;
    Error(msg: string): void;
    Picture(picture: any, message?: string): void;
    Event(msg: string): void;
    Link(url: string, message?: string): void;
    File(path: string, message?: string): void;
};

declare var Runner: {
    Stop(message?: string): void;
    Pause(timeout?: number, message?: string): void;
};

declare var aqString: {
    Compare(s1: string, s2: string, caseSensitive?: boolean): number;
    Format(format: string, ...args: any[]): string;
    SubString(str: string, index: number, count: number): string;
    Trim(str: string): string;
    ToUpper(str: string): string;
    ToLower(str: string): string;
};

declare var Aliases: any;
declare var Sys: any;
declare var BuiltIn: {
    Delay(ms: number): void;
    ShowMessage(msg: string): void;
};
declare var aqObject: any;
declare var aqConvert: any;
declare var aqDateTime: any;
declare var aqFile: any;
declare var aqFileSystem: any;
declare var Project: any;
declare var ProjectSuite: any;