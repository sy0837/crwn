import {createSelector} from 'reselect'

const directory=state =>state.directory

export const directorySelectorItem = createSelector(
    [directory],
    directory => directory.sections
)