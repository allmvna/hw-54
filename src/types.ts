export interface Item {
    hasItem: boolean;
    clicked: boolean;
}

export interface ItemProps {
    onClick: () => void;
    clicked: boolean;
    hasItem: boolean;
}

export interface FieldProps {
    onItemClick: (index: number) => void;
    items: Item[];
}

export interface AttemptCountProps {
    attempts: number;
}
