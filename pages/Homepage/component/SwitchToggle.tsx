import React from "react";
import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export default function SwitchToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <div>
      
        <Switch
          checked={colorScheme === "dark"}
          onChange={() => toggleColorScheme()}
          
          onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
          offLabel={
            <IconMoonStars
              color={theme.colors.gray[6]}
              size={20}
              stroke={1.5}
            />
          }
        />
     
    </div>
  );
}
