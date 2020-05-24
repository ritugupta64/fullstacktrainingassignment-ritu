import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';

import { GlobalContext } from '../../store/context'
import { getCharacterData } from '../../store/action'
import CharacterList from '../organism/Characters/CharacterList/characterList'
import { fetchWrapper } from '../../utilities'
import Heading from '../atoms/Heading'
import Select from '../atoms/Select'
import SearchBox from '../molecules/SearchBox'
import FilterList from '../organism/FilterList'
import Tags from '../molecules/Tags'
import styles from './wrapper.styles'

const Wrapper = ({className}) => {
  const { dispatch } = useContext(GlobalContext)
  const [data, setData] = useState([])
  const [sort, setSort] = useState('Ascending')
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({})

  const handleSorting = (e) => setSort(e.target.value)
  const sortedData = (content) => {
    let sortedContent = { ...content }
    if (sort === 'Descending') {
      sortedContent = sortedContent?.results?.sort((a, b) => b.id - a.id)
    } else {
      sortedContent = sortedContent?.results?.sort((a, b) => a.id - b.id)
    }

    return { ...content, results: sortedContent }
  }

  const handleSearchValue = (value) => setSearch(value)

  const handleFilters = (checkedValues, removedValues, id) => {
    const filtersObj = { ...filters }
    if (removedValues) {
      filtersObj[id] = filtersObj[id]?.filter((itm) => itm !== removedValues)
    } else {
      filtersObj[id] = filtersObj[id]
        ? [...filtersObj[id], checkedValues]
        : [checkedValues]
    }

    setFilters(filtersObj)
  }

  const handleCloseFilter = (name, category) => {
    handleFilters(null, name, category)
    document.getElementsByName(name)[0].checked = false
  }

  const fetchUrl = async () => {
    const searchfilters = `?${search ? `&name=${search}` : ''}`
    const filtersString = Object.keys(filters)
      .map((itm) => `&${filters[itm].map((ftr) => `${itm}=${ftr}`).join('&')}`)
      .join('&')

    const url = await fetchWrapper(
      `https://rickandmortyapi.com/api/character/${searchfilters}${filtersString}`
    )
    setData(url)
    sortedData(url)
    getCharacterData(url, dispatch)
  }
  useEffect(() => {
    fetchUrl()
  }, [search, filters])

  useEffect(() => {
    setData(sortedData(data))
  }, [sort])

  const Speicies = ['Human', 'Mythology', 'Other Species']
  const Gender = ['Male', 'Female']
  const Origin = [
    'Unknown',
    'Post-Apocalyptic Earth',
    'Nuptia 4',
    'Other Origins',
  ]

  return (
    <div className={className}>
      <aside className="container__left-column">
        <Heading>Filters</Heading>

        <FilterList
          filterList={Speicies}
          title="Species"
          getSelectedFilter={(amend, remove) =>
            handleFilters(amend, remove, 'species')
          }
        />
        <FilterList
          filterList={Gender}
          title="Gender"
          getSelectedFilter={(amend, remove) =>
            handleFilters(amend, remove, 'gender')
          }
        />
        <FilterList
          filterList={Origin}
          title="Origin"
          getSelectedFilter={(amend, remove) =>
            handleFilters(amend, remove, 'origin')
          }
        />
      </aside>
      <section className="container__right-column">
        <SearchBox getValue={handleSearchValue} labelText="Search by Name" />

        <Select
          selectList={['Ascending', 'Descending']}
          SelectOption={handleSorting}
        />

        <Tags
          tags={Object.keys(filters)?.reduce((accumulator, currentValue) => {
            const tagsCategory = filters[currentValue].map((itm) => ({
              category: currentValue,
              name: itm,
            }))
            return [...accumulator, ...tagsCategory]
          }, [])}
          getCloseItem={(category, name) => handleCloseFilter(name, category)}
        />

        <CharacterList characterList={data?.results} />
      </section>
    </div>
  )
}

export default styled(Wrapper)`
  ${styles};
`;
