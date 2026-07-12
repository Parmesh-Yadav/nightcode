import { useCallback, useEffect, useRef } from "react";
import { useDialog } from "../../providers/dialog";
import { useTheme } from "../../providers/theme";
import { DialogSearchList } from "../dialog-search-list";
import { THEMES } from "../../providers/theme/theme";
import type { Theme } from "../../providers/theme/theme";

export const ThemeDialogContent = () => {
    const dialog = useDialog();
    const { setTheme, theme } = useTheme();
    const originalThemeRef = useRef<Theme>(theme);
    const confirmedRef = useRef(false);

    useEffect(() => {
        return () => {
            if (!confirmedRef.current) {
                setTheme(originalThemeRef.current);
            }
        }
    }, [])

    const handleSelect = useCallback((selectedTheme: Theme) => {
        setTheme(selectedTheme);
        confirmedRef.current = true;
        dialog.close();
    }, [setTheme, dialog]);

    const handleHighlight = useCallback((highlightedTheme: Theme) => {
        setTheme(highlightedTheme);
    }, [setTheme]);

    return (
        <DialogSearchList
            items={THEMES}
            onSelect={handleSelect}
            onHighlight={handleHighlight}
            filterFn={(theme, query) => theme.name.toLowerCase().includes(query.toLowerCase())}
            renderItem={(theme, isSelected) => (
                <text selectable={false} fg={isSelected ? "black" : "white"}>
                    {
                        theme.name === originalThemeRef.current.name
                            ? "\u0020\u0022\u0020"
                            : "\u0020\u0020\u0020"
                    }
                    {theme.name}
                </text>
            )}
            getKey={(theme) => theme.name}
            placeholder="Search themes..."
            emptyText="No themes found"
        />
    )
}