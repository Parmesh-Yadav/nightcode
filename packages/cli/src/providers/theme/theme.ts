export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  surface: string;
  background: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "Nightfox",
    colors: {
      primary: "#00ffcc", // Electric Neon Teal
      planMode: "#ff007f", // Acid Pink
      selection: "#2e0854", // Deep Blackcurrant
      thinking: "#ffff00", // Toxic Yellow
      success: "#39ff14", // Neon Lime
      error: "#ff3333", // Fire Engine Red
      info: "#00bfff", // Electric Cyan
      surface: "#1a0033", // Deep Midnight Violet
      background: "#0d001a", // Pitch Black-Purple
      dialogSurface: "#26004d", // Intense Royal Violet
      thinkingBorder: "#e6e600", // Hot Sulfur Yellow
      dimSeparator: "#3d0080", // Electric Grape
    },
  },
  {
    name: "Toxic Radioactive",
    colors: {
      primary: "#39ff14", // Radioactive Lime
      planMode: "#ff6600", // Blaze Orange
      selection: "#1a3300", // Sludge Green
      thinking: "#cc00ff", // Psychedelic Purple
      success: "#00ffaa", // Hyper Turquoise
      error: "#ff0055", // Hot Crimson
      info: "#00dfff", // Laser Cyan
      surface: "#051400", // Dense Moss Dark
      background: "#020a00", // Deep Void Green
      dialogSurface: "#0c2400", // Biohazard Green-Black
      thinkingBorder: "#b300e6", // Vivid Magenta
      dimSeparator: "#163a00", // Dark Chemical Green
    },
  },
  {
    name: "Magma Surge",
    colors: {
      primary: "#ff3700", // Liquid Lava Orange
      planMode: "#00e5ff", // Ice Floe Cyan
      selection: "#4a0f00", // Scorched Earth
      thinking: "#ffc400", // Molten Gold
      success: "#a2ff00", // Neon Chartreuse
      error: "#ff0044", // Blood Red
      info: "#0088ff", // Deep Sea Blue
      surface: "#1f0700", // Volcano Ash Dark
      background: "#120400", // Obsidian Black
      dialogSurface: "#2d0a00", // Burnt Amber
      thinkingBorder: "#cca200", // Raw Brass
      dimSeparator: "#421200", // Rust Red
    },
  },
  {
    name: "Laser Arcade",
    colors: {
      primary: "#ff00ff", // Pure Fuchsia Pop
      planMode: "#00ffff", // Clean Cyan
      selection: "#003366", // Deep Retro Navy
      thinking: "#9dff00", // Bright Alien Lime
      success: "#00ff66", // Mint Laser
      error: "#ff2200", // High-Volt Red
      info: "#7b00ff", // Deep Synth Purple
      surface: "#0a0a23", // Arcade Cabinet Navy
      background: "#03030f", // Deep Space Void
      dialogSurface: "#131338", // Retro Grid Blue
      thinkingBorder: "#85d900", // Laser Yellow-Green
      dimSeparator: "#1b1b4c", // Synth Grid Line
    },
  },
  {
    name: "Solar Eclipse",
    colors: {
      primary: "#ffcc00", // Solar Flare Gold
      planMode: "#7000ff", // Ultraviolet
      selection: "#332200", // Dark Umber
      thinking: "#00ff88", // Matrix Mint
      success: "#22ff00", // Hyper Green
      error: "#ff2a55", // Neon Coral
      info: "#00ccff", // sky Cyan
      surface: "#14120c", // Burnished Charcoal
      background: "#0a0906", // Eclipse Shadow
      dialogSurface: "#1f1c14", // Dark Granite
      thinkingBorder: "#00cc6d", // Jade Laser
      dimSeparator: "#2e291f", // Warm Slate
    },
  },
  {
    name: "Sonic Prism",
    colors: {
      primary: "#0055ff", // Cobalt Blue Shock
      planMode: "#ff9900", // High-Vis Tangerine
      selection: "#001a4d", // Abyssal Blue
      thinking: "#ff00bb", // Hot Barbie Pink
      success: "#00ffcc", // Caribbean Neon
      error: "#ff003c", // Ruby Laser
      info: "#a600ff", // Bright Violet
      surface: "#000b1a", // Deep Sonic Blue
      background: "#00050f", // Void Sapphire
      dialogSurface: "#001633", // Ocean Trench
      thinkingBorder: "#d6009d", // Deep Magenta
      dimSeparator: "#00224d", // Electric Navy
    },
  },
  {
    name: "Acid Toxicity",
    colors: {
      primary: "#bfff00", // Lime Acid Slime
      planMode: "#ff0055", // Hot Punch Red
      selection: "#222b00", // Rotten Olive Dark
      thinking: "#00e5ff", // Electric Pool Blue
      success: "#33ff00", // Pure Green Pop
      error: "#ff3300", // Alert Orange-Red
      info: "#9900ff", // Nebula Violet
      surface: "#12140c", // Dark Mud Gray
      background: "#090a06", // Swamp Shadows
      dialogSurface: "#1b1f12", // Moss Oxide
      thinkingBorder: "#00b2cc", // Deep Aqua Spark
      dimSeparator: "#29301c", // Acidic Khaki
    },
  },
  {
    name: "Bubblegum Pop (Light)",
    colors: {
      primary: "#ff00aa", // Strawberry Taffy
      planMode: "#00aaff", // Electric Blue Sky
      selection: "#ffe6f2", // Soft Pink Blush
      thinking: "#7000ff", // Deep Grape Juice
      success: "#00cc66", // Spearmint Green
      error: "#ff1a1a", // Candy Apple Red
      info: "#00d5ff", // Bright Pool Blue
      surface: "#fff0f5", // Lavender Blush
      background: "#ffffff", // Crisp Milk White
      dialogSurface: "#ffe4e1", // Sweet Melon Pink
      thinkingBorder: "#5900cc", // Velvet Indigo
      dimSeparator: "#ffd1dc", // Pastel Rose Separator
    },
  },
  {
    name: "Candy Shock (Light)",
    colors: {
      primary: "#00cc99", // Bright Mint Gelato
      planMode: "#ff6600", // Orange Creamsicle
      selection: "#e0f7f4", // Ice Mint Tint
      thinking: "#ff0099", // Shocking Pink Candy
      success: "#77ff00", // Bright Green Apple
      error: "#ff0044", // Sour Cherry Red
      info: "#0088ff", // Pure Sky Blue
      surface: "#f0fdf4", // Pastel Honeydew
      background: "#f8fafc", // Bright Slate Ice
      dialogSurface: "#dcfce7", // Sweet Pistachio
      thinkingBorder: "#cc007a", // Wild Berry
      dimSeparator: "#bbf7d0", // Soft Lime Line
    },
  },
  {
    name: "Toxic Sunburst",
    colors: {
      primary: "#ffea00", // Pure Banana Neon
      planMode: "#0044ff", // Blueprint Blue
      selection: "#3a3400", // Dark Mustard Void
      thinking: "#ff00ff", // Cyber Magenta
      success: "#00ff66", // Mint Spark
      error: "#ff2200", // High-Volt Crimson
      info: "#00ffff", // Aqua Laser
      surface: "#1c1a00", // Dark Sulfur Husk
      background: "#0f0e00", // Deep Ash-Yellow
      dialogSurface: "#2e2b00", // Heavy Gold-Charcoal
      thinkingBorder: "#cc00cc", // Dark Orchid Spark
      dimSeparator: "#474200", // Industrial Olive
    },
  },
];

export const DEFAULT_THEME = THEMES.find((t) => t.name === "Nightfox")!;
