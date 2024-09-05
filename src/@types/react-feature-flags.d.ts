declare module 'react-feature-flags' {
  export interface Flag {
    isActive: boolean;
    name: string;
  }

  export interface FlagsProps {
    authorizedFlags: string[];
    exactFlags?: boolean;
    renderOff?: () => void;
    renderOn?: () => void;
  }

  export const Flags: PropsWithChildren<FlagsProps>;

  export interface FlagsProviderProps {
    value: Flag[];
  }

  export const FlagsProvider: PropsWithChildren<FlagsProviderProps>;
}
