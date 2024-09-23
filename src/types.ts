export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface ItemProps {
    onClick: (index: number) => void;
    clicked: boolean;
    hasItem: boolean;
    index: number;
}

export interface FieldProps {
    onItemClick: (index: number) => void;
    items: Item[];
}

export interface AttemptCountProps {
    attempts: number;
}

export interface ResetGameProps {
    onResetGame: () => void;
}